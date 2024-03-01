import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { PremierLeagueComponent } from './premier-league/premier-league.component';



@NgModule({
  declarations: [
    HomeComponent,
    PremierLeagueComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[HomeComponent]
})
export class HomeModule { }
