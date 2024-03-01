import { Component, OnInit } from '@angular/core';
import { FootballDataService } from '../../football-data.service';

@Component({
  selector: 'app-bundesliga-standing',
  templateUrl: './bundesliga-standing.component.html',
  styleUrl: './bundesliga-standing.component.css'
})
export class BundesligaStandingComponent implements OnInit{
  area: any;
  competition: any;
  season: any;
  standings: any[] = [];
  constructor(private footballService: FootballDataService) {}

  ngOnInit(): void {
    this.footballService.getStanding("BL1")
    .subscribe({
      next : (data) => {
        this.area = data["area"],
        this.competition = data["competition"];
        this.standings = data["standings"];
        console.log(this.standings[0]?.table[0]);
      }
    })
  }
}
