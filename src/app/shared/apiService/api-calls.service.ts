import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Catergoris } from './types/types';

@Injectable({
  providedIn: 'root',
})
export class ApiCallsService {
  gettingAllCategoris() {
    return this.http.get<Catergoris[]>(
      'https://restaurant.stepprojects.ge/api/Categories/GetAll'
    );
  }

  constructor(private http: HttpClient) {}
}
