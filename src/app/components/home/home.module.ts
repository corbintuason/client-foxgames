import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HomeRoutingModule }  from './home-routing.module';

import { Routes, RouterModule, } from '@angular/router';
import { GameModalComponent } from '../../components/game-modal/game-modal.component';
import { GameListComponent } from './game-list/game-list.component';
import { GameListItemComponent } from './game-list/game-list-item/game-list-item.component';

@NgModule({
  declarations: [

  GameListComponent,

  GameListItemComponent],
  imports: [
    HomeRoutingModule,
    BrowserModule,
    FormsModule,
  ],
  entryComponents: [
    GameModalComponent
],
})
export class HomeModule { }