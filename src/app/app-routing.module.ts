import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategorisOptionsComponent } from './categories/categoriesOptions/categoris-options/categoris-options.component';

const routes: Routes = [
  { path: '', redirectTo: 'categoris', pathMatch: 'full' },
  { path: 'categoris', component: CategorisOptionsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
