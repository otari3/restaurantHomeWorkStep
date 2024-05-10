import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { HandelingStateService } from '../../../shared/handelingState/handeling-state.service';
import { ApiCallsService } from '../../../shared/apiService/api-calls.service';
import { Product } from '../../../shared/apiService/types/types';

@Component({
  selector: 'app-food-display',
  templateUrl: './food-display.component.html',
  styleUrl: './food-display.component.scss',
})
export class FoodDisplayComponent implements OnInit {
  constructor(
    private activRoute: ActivatedRoute,
    private state: HandelingStateService,
    private api: ApiCallsService
  ) {}
  products!: Product[];
  updatingCurrentFilter() {
    this.activRoute.params.subscribe((data: Params) => {
      this.state.gettingCurentFilter.next(data['id']);
      if (data['id'] === 'all') {
        this.api.gettingAllProduts().subscribe((data: Product[]) => {
          this.products = data;
        });
      } else {
        this.api.gettingCategoryProducts(+data['id']).subscribe((data) => {
          this.products = data.products;
        });
      }
    });
  }
  ngOnInit(): void {
    this.updatingCurrentFilter();
  }
}
