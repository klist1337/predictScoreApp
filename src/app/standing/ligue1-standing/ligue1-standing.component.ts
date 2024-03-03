import { Component } from '@angular/core';
import { FootballDataService } from '../../football-data.service';

@Component({
  selector: 'app-ligue1-standing',
  templateUrl: './ligue1-standing.component.html',
  styleUrl: './ligue1-standing.component.css'
})
export class Ligue1StandingComponent {
  area: any;
  competition: any;
  season: any;
  standings: any[] = [];
  constructor(private footballService: FootballDataService) {}

  ngOnInit(): void {
    this.footballService.getStanding("FL1")
    .subscribe({
      next : (data) => {
        this.area = data["area"],
        this.competition = data["competition"];
        this.standings = data["standings"];
         
      }
    })
  }
}
