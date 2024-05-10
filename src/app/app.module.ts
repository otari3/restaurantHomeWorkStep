import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar/navbar.component';
import { CategorisOptionsComponent } from './categories/categoriesOptions/categoris-options/categoris-options.component';
import { FoodFilterComponent } from './categories/categoriesOptions/categoris-options/foodFilter/food-filter/food-filter.component';
import { FoodDisplayComponent } from './categories/foodDisplay/food-display/food-display.component';
import { CartComponent } from './cart/cart/cart.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CategorisOptionsComponent,
    FoodFilterComponent,
    FoodDisplayComponent,
    CartComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
