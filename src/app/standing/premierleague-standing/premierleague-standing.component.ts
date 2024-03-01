import { Component, OnInit } from '@angular/core';
import { FootballDataService } from '../../football-data.service';

@Component({
  selector: 'app-premierleague-standing',
  templateUrl: './premierleague-standing.component.html',
  styleUrl: './premierleague-standing.component.css'
})
export class PremierleagueStandingComponent implements OnInit  {
    area: any ;
    competition: any ;
    season:any;
    standings: any[] = [];
    constructor(private footballService:FootballDataService) {}
    ngOnInit(): void {
      // Premier league standing
      this.footballService.getStanding("PL")
      .subscribe({
        next : (data) => {
          this.area = data["area"];
          this.competition = data["competition"];
          this.season = data["season"];
          this.standings = data["standings"];
          
        }
      })
    }
}
