import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { HandelingStateService } from '../../../shared/handelingState/handeling-state.service';

@Component({
  selector: 'app-food-display',
  templateUrl: './food-display.component.html',
  styleUrl: './food-display.component.scss',
})
export class FoodDisplayComponent implements OnInit {
  constructor(
    private activRoute: ActivatedRoute,
    private state: HandelingStateService
  ) {}
  updatingCurrentFilter() {
    this.activRoute.params.subscribe((data: Params) => {
      this.state.gettingCurentFilter.next(data['id']);
    });
  }
  ngOnInit(): void {
    this.updatingCurrentFilter();
  }
}
