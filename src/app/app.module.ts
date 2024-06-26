import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeModule } from './home/home.module';
import { LiveScoreComponent } from './live-score/live-score.component';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { StandingModule } from './standing/standing.module';
import { PredictionComponent } from './prediction/prediction.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LiveScoreComponent,
    PredictionComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HomeModule,
    HttpClientModule,
    StandingModule,
  ],
  providers: [
    provideHttpClient(withFetch()),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
