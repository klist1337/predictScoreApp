import { Component } from '@angular/core';
import { FootballDataService } from '../../football-data.service';

@Component({
  selector: 'app-championship-standing',
  templateUrl: './championship-standing.component.html',
  styleUrl: './championship-standing.component.css'
})
export class ChampionshipStandingComponent {
  area: any;
  competition: any;
  season: any;
  standings: any[] = [];
  constructor(private footballService: FootballDataService) {}

  ngOnInit(): void {
    this.footballService.getStanding("ELC")
    .subscribe({
      next : (data) => {
        this.area = data["area"],
        this.competition = data["competition"];
        this.standings = data["standings"];
         
      }
    })
  }
}
