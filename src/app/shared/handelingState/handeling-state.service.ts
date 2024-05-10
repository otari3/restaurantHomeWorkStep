import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HandelingStateService {
  gettingCurentFilter = new Subject<number | string>();

  constructor() {}
}
