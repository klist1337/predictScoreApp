import { NgModule } from '@angular/core';
import {  RouterModule, Routes } from '@angular/router';
import { PremierleagueStandingComponent } from './premierleague-standing/premierleague-standing.component';
import { BundesligaStandingComponent } from './bundesliga-standing/bundesliga-standing.component';
import { LigaStandingComponent } from './liga-standing/liga-standing.component';
import { SerieAStandingComponent } from './serie-astanding/serie-astanding.component';
import { Ligue1StandingComponent } from './ligue1-standing/ligue1-standing.component';
import { EredivisieStandingComponent } from './eredivisie-standing/eredivisie-standing.component';
import { PrimeiraLigaStandingComponent } from './primeira-liga-standing/primeira-liga-standing.component';
import { BresileiroSeriaStandingComponent } from './bresileiro-seria-standing/bresileiro-seria-standing.component';
import { ChampionshipStandingComponent } from './championship-standing/championship-standing.component';

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
  {
    path: 'eredivisie',
    component: EredivisieStandingComponent,
  },
  {
    path: 'primeiraliga',
    component: PrimeiraLigaStandingComponent,
  },
  {
    path: 'brasileiroserieA',
    component: BresileiroSeriaStandingComponent,
  },
  {
    path: 'championship',
    component: ChampionshipStandingComponent,
  },

]

@NgModule({
  exports: [RouterModule],
  imports:[RouterModule.forChild(routes)],
})
export class StandingRoutingModule { }
