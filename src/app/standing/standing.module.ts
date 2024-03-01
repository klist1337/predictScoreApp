import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PremierleagueStandingComponent } from './premierleague-standing/premierleague-standing.component';
import { LigaStandingComponent } from './liga-standing/liga-standing.component';
import { BundesligaStandingComponent } from './bundesliga-standing/bundesliga-standing.component';
import { SerieAStandingComponent } from './serie-astanding/serie-astanding.component';
import { Ligue1StandingComponent } from './ligue1-standing/ligue1-standing.component';
import { PrimeiraLigaStandingComponent } from './primeira-liga-standing/primeira-liga-standing.component';
import { EredivisieStandingComponent } from './eredivisie-standing/eredivisie-standing.component';
import { ChampionshipStandingComponent } from './championship-standing/championship-standing.component';
import { BresileiroSeriaStandingComponent } from './bresileiro-seria-standing/bresileiro-seria-standing.component';
import { UclTableComponent } from './ucl-table/ucl-table.component';
import { EuropaleagueTableComponent } from './europaleague-table/europaleague-table.component';
import { StandingRoutingModule } from './standing-routing.module';



@NgModule({
  declarations: [
    PremierleagueStandingComponent,
    LigaStandingComponent,
    BundesligaStandingComponent,
    SerieAStandingComponent,
    Ligue1StandingComponent,
    PrimeiraLigaStandingComponent,
    EredivisieStandingComponent,
    ChampionshipStandingComponent,
    BresileiroSeriaStandingComponent,
    UclTableComponent,
    EuropaleagueTableComponent,
  ],
  imports: [
    CommonModule,
    StandingRoutingModule,
  ]
})
export class StandingModule { }
