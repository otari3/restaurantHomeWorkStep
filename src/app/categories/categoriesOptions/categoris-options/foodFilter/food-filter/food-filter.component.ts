import { Component, OnInit } from '@angular/core';
import { HandelingStateService } from '../../../../../shared/handelingState/handeling-state.service';
import { FormControl, FormGroup } from '@angular/forms';
import { ApiCallsService } from '../../../../../shared/apiService/api-calls.service';

@Component({
  selector: 'app-food-filter',
  templateUrl: './food-filter.component.html',
  styleUrl: './food-filter.component.scss',
})
export class FoodFilterComponent implements OnInit {
  constructor(
    private state: HandelingStateService,
    private api: ApiCallsService,
    private handelingState: HandelingStateService
  ) {}
  currentPage!: string | number;
  spic: string = '';
  isCheckedNuts: boolean = false;
  isCheckedVeg: boolean = false;
  filterForm: FormGroup = new FormGroup({
    spiciness: new FormControl(''),
    nuts: new FormControl(false),
    veg: new FormControl(false),
  });
  submitingForm() {
    this.api
      .filteringFood(
        this.filterForm.get('veg')?.value,
        this.filterForm.get('nuts')?.value,
        this.filterForm.get('spiciness')?.value,
        this.currentPage
      )
      .subscribe((data) => {
        this.handelingState.gettingFilterFormOutput.next(data);
      });
  }
  resetingFilter() {
    this.isCheckedNuts = false;
    this.isCheckedVeg = false;
    this.spic = '';
    if (this.currentPage === '') {
      this.api.gettingAllProduts().subscribe((data) => {
        this.handelingState.gettingFilterFormOutput.next(data);
      });
    } else {
      this.api.gettingCategoryProducts(this.currentPage).subscribe((data) => {
        this.handelingState.gettingFilterFormOutput.next(data.products);
      });
    }
  }
  ngOnInit(): void {
    this.state.gettingCurentFilter.subscribe((data: string | number) => {
      if (data === 'all') {
        this.currentPage = '';
      } else {
        this.currentPage = data;
      }
    });
  }
}
