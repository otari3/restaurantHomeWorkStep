import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategorisOptionsComponent } from './categories/categoriesOptions/categoris-options/categoris-options.component';
import { FoodDisplayComponent } from './categories/foodDisplay/food-display/food-display.component';
import { CartComponent } from './cart/cart/cart.component';

const routes: Routes = [
  { path: '', redirectTo: 'categoris', pathMatch: 'full' },
  {
    path: 'categoris',
    component: CategorisOptionsComponent,
    children: [
      {
        path: ':id',
        component: FoodDisplayComponent,
      },
    ],
  },
  { path: 'cart', component: CartComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
