import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Catergoris, Product, Products } from './types/types';

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
  gettingCategoryProducts(id: number) {
    return this.http.get<Products>(
      `https://restaurant.stepprojects.ge/api/Categories/GetCategory/${id}`
    );
  }

  constructor(private http: HttpClient) {}
}
