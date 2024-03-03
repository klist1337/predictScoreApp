import { Component, OnInit } from '@angular/core';
import { FootballDataService } from '../../football-data.service';

@Component({
  selector: 'app-liga-standing',
  templateUrl: './liga-standing.component.html',
  styleUrl: './liga-standing.component.css'
})
export class LigaStandingComponent implements OnInit {
  area: any;
  competition: any;
  season: any;
  standings: any[] = [];
  constructor(private footballService: FootballDataService) {}

  ngOnInit(): void {
    this.footballService.getStanding("PD")
    .subscribe({
      next : (data) => {
        this.area = data["area"],
        this.competition = data["competition"];
        this.standings = data["standings"];
         
      }
    })
  }
}
