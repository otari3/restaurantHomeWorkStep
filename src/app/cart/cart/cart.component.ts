import { Component, OnInit } from '@angular/core';
import { ApiCallsService } from '../../shared/apiService/api-calls.service';
import { Product, Products } from '../../shared/apiService/types/types';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent implements OnInit {
  constructor(private api: ApiCallsService) {}
  cart!: any;
  ngOnInit(): void {
    this.api.gettingAllInCart().subscribe((data) => {
      this.cart = data;
    });
  }
  addingToTotal(item: any) {
    item.quantity++;
    this.api
      .updatingBustket({
        quantity: item.quantity,
        price: item.product.price,
        productId: item.product.id,
      })
      .subscribe();
  }
  removeingFromTotal(item: any) {
    if (item.quantity > 1) {
      item.quantity--;
      this.api
        .updatingBustket({
          quantity: item.quantity,
          price: item.product.price,
          productId: item.product.id,
        })
        .subscribe();
    }
  }
  delet(index: number, item: any) {
    this.api.deletingFromCart(item.product.id).subscribe();
    this.cart.splice(index, 1);
  }
}
