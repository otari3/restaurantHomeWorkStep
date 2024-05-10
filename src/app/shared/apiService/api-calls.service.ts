import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  Catergoris,
  PostingAndPutingType,
  Product,
  Products,
} from './types/types';
import { HtmlParser } from '@angular/compiler';

@Injectable({
  providedIn: 'root',
})
export class ApiCallsService {
  gettingAllCategoris() {
    return this.http.get<Catergoris[]>(
      'https://restaurant.stepprojects.ge/api/Categories/GetAll'
    );
  }
  gettingAllProduts() {
    return this.http.get<Product[]>(
      'https://restaurant.stepprojects.ge/api/Products/GetAll'
    );
  }
  gettingCategoryProducts(id: number | string) {
    return this.http.get<Products>(
      `https://restaurant.stepprojects.ge/api/Categories/GetCategory/${id}`
    );
  }
  filteringFood(
    veg: boolean,
    nuts: boolean,
    spic: string | number,
    catId: string | number
  ) {
    if (spic < '0') {
      spic = '';
    }
    return this.http.get<Product[]>(
      `https://restaurant.stepprojects.ge/api/Products/GetFiltered?vegeterian=${veg}&nuts=${nuts}&spiciness=${spic}&categoryId=${catId}`
    );
  }
  postingInCart(obj: PostingAndPutingType) {
    return this.http.post(
      'https://restaurant.stepprojects.ge/api/Baskets/AddToBasket',
      obj
    );
  }
  gettingAllInCart() {
    return this.http.get(
      'https://restaurant.stepprojects.ge/api/Baskets/GetAll'
    );
  }
  updatingBustket(obj: PostingAndPutingType) {
    return this.http.put(
      'https://restaurant.stepprojects.ge/api/Baskets/UpdateBasket',
      obj
    );
  }
  deletingFromCart(id: number) {
    return this.http.delete(
      `https://restaurant.stepprojects.ge/api/Baskets/DeleteProduct/${id}`
    );
  }
  constructor(private http: HttpClient) {}
}
