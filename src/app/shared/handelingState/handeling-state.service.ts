import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Product } from '../apiService/types/types';

@Injectable({
  providedIn: 'root',
})
export class HandelingStateService {
  gettingCurentFilter = new Subject<number | string>();
  gettingFilterFormOutput = new Subject<Product[]>();
  constructor() {}
}
