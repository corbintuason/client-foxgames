import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductPageComponent } from "./components/product-page/product-page.component"

const routes: Routes = [
  {
    path: '', component : HomeComponent,
  },
  {
    path: 'game/:id', component: ProductPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  FormsModule,
  BrowserModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
// export const routingComponents = [CheckoutComponent];