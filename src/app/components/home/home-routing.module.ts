import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from "./home.component";
const routes: Routes = [
  {path: '', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  FormsModule,
  BrowserModule
  ],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
