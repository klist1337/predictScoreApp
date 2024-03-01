import { NgModule } from '@angular/core';
import {  RouterModule, Routes } from '@angular/router';
import { PremierleagueStandingComponent } from './premierleague-standing/premierleague-standing.component';
import { BundesligaStandingComponent } from './bundesliga-standing/bundesliga-standing.component';
import { LigaStandingComponent } from './liga-standing/liga-standing.component';
import { SerieAStandingComponent } from './serie-astanding/serie-astanding.component';
import { Ligue1StandingComponent } from './ligue1-standing/ligue1-standing.component';

const routes: Routes = [
  {
    path: 'premierleague',
    component: PremierleagueStandingComponent,
  },
  {
    path: 'bundesliga',
    component: BundesligaStandingComponent,
  },
  {
    path: 'liga',
    component: LigaStandingComponent,
  },
  {
    path: 'serieA',
    component: SerieAStandingComponent,
  },
  {
    path: 'ligue1',
    component: Ligue1StandingComponent,
  },

]

@NgModule({
  exports: [RouterModule],
  imports:[RouterModule.forChild(routes)],
})
export class StandingRoutingModule { }
