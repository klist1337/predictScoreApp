import { Component, OnInit } from '@angular/core';
import { FootballDataService } from '../football-data.service';
import { error } from 'console';
import { ShareDataService } from '../share-data.service';


  

@Component({
  selector: 'app-live-score',
  templateUrl: './live-score.component.html',
  styleUrl: './live-score.component.css'
})
export class LiveScoreComponent implements OnInit{
  matches: any[] = [];
  constructor(private footBallService: FootballDataService) {}
  ngOnInit(): void {
    this.footBallService.getMatchOfTheDay()
    .subscribe({
      next: (data) => {
        this.matches = data['matches'];
      },
      error: (error) => console.error(error),
    })
    // this.footBallService.getYesterdayMatch()
    // .subscribe({
    //   next: (data) => {
    //     this.matches = data['matches'];
    //   },
    //   error: (error) => console.error(error),
    // })
  }

  getMatchMinutes(dateStart: string, lastUpdate:string, halftime: string) {
    let time = new Date(lastUpdate).getTime() - new Date(dateStart).getTime();
    if (halftime !== null)
      return Math.floor((((time / (1000 * 60)) % 60) + 45));
    return Math.floor((time / (1000 * 60)) % 60);
  }

  hourFormat(date:string) : string {
   return this.footBallService.hourFormat(date);
  }
  getHtGoal(score: string) {
    if (score !== null)
      return `(${score})`;
    return ('');
  }
  getFtGoal(score: string) {
    if (score !== null)
      return score;
    return('');
  }

  getRoute(league: string) :string {
    let route : string = "";

    switch(league) {
      case "Premier League":
        route = "/standing/premierleague";
        break;
      case "Bundesliga":
        route = "/standing/bundesliga";
        break;
      case "Primera Division":
        route = "/standing/liga";
        break;
      case "Serie A" :
        route = "/standing/serieA";
        break;
      case "Ligue 1" :
        route = "/standing/ligue1";
        break;
      case "Eredivisie" :
        route = "/standing/eredivisie";
        break;
      case "Primeira Liga" :
        route = "/standing/primeiraliga";
        break;
      case "Campeonato Brasileiro Série A":
        route = "/standing/brasileiroseriA";
        break;
      case "Championship":
        route ="/standing/championship";
        break;   
    }
    return route;
  }

  InplayStyle(matchStatus: string){
    if (matchStatus === "IN_PLAY") {
      return {
        'color' : 'red',
      }
    };
    return null;
  }
}
