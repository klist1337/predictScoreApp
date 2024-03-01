import { Component, OnInit } from '@angular/core';
import { FootballDataService } from '../../football-data.service';
import { Match } from '../../interfaces';
import { ActivatedRoute } from '@angular/router';
import { error } from 'console';


@Component({
  selector: 'app-premier-league',
  templateUrl: './premier-league.component.html',
  styleUrl: './premier-league.component.css'
})
export class PremierLeagueComponent implements OnInit {
  scores:string[] = [
  " 1 - 0 ", " 2 - 1", " 3 - 2" ,
  " 2 - 2", " 3 - 4 ", " 0 - 0 ", 
  " 3 - 1 ", " 1 - 0 ", " 2 - 1" , " 2 - 1"];

  matches: any[] = [];
  constructor (private footDataServices: FootballDataService,
    private route:ActivatedRoute) {}

  ngOnInit(): void {
    //get premiere league match
    this.footDataServices.getMatch(27, "PL")
    .subscribe({
      next: (data) => {
        this.matches = data['matches']; 
      },
      error: () => console.log('error'),
    });
  }
  formatDate(date:string): string {
    let Data = date.replace('T', ' ');
    Data = Data.split(':00Z')[0]
    return Data;
  }
  
}
