import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ApiCallsService } from '../../../shared/apiService/api-calls.service';
import { Catergoris } from '../../../shared/apiService/types/types';
import { ActivatedRoute, Router } from '@angular/router';
import { HandelingStateService } from '../../../shared/handelingState/handeling-state.service';

@Component({
  selector: 'app-categoris-options',
  templateUrl: './categoris-options.component.html',
  styleUrl: './categoris-options.component.scss',
})
export class CategorisOptionsComponent implements OnInit {
  constructor(
    private api: ApiCallsService,
    private route: Router,
    private activRoute: ActivatedRoute,
    private state: HandelingStateService,
    private cd: ChangeDetectorRef
  ) {}
  allCategoris!: Catergoris[];
  currentFilter!: number | string;
  gettingCategoris() {
    this.api.gettingAllCategoris().subscribe((data: Catergoris[]) => {
      this.allCategoris = data;
    });
  }
  navigatingToChild(id: string | number) {
    this.route.navigate([id], { relativeTo: this.activRoute });
  }
  ngOnInit(): void {
    if (this.route.routerState.snapshot.url === '/categoris') {
      this.route.navigate(['all'], { relativeTo: this.activRoute });
    }
    this.gettingCategoris();
    this.state.gettingCurentFilter.subscribe((data: number | string) => {
      this.currentFilter = data;
      this.cd.detectChanges();
    });
  }
}
