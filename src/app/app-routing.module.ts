import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LiveScoreComponent } from './live-score/live-score.component';
import { PremierLeagueComponent } from './home/premier-league/premier-league.component';
import { PremierleagueStandingComponent } from './standing/premierleague-standing/premierleague-standing.component';
import { PredictionComponent } from './prediction/prediction.component';

const routes: Routes = [
  {path:'Home', component: HomeComponent, },
  {path:'', redirectTo:'/Home', pathMatch:'full'},
  {path:'LiveScore', component: LiveScoreComponent},

  {path:'standing', 
  loadChildren: () => import('./standing/standing.module').then( m => m.StandingModule)
  },
  {
    path:'prediction',
    component: PredictionComponent,
  },
  {
    path:'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
