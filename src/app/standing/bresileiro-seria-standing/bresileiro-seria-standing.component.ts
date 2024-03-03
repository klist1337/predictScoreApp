import { Component } from '@angular/core';
import { FootballDataService } from '../../football-data.service';

@Component({
  selector: 'app-bresileiro-seria-standing',
  templateUrl: './bresileiro-seria-standing.component.html',
  styleUrl: './bresileiro-seria-standing.component.css'
})
export class BresileiroSeriaStandingComponent {
  area: any;
  competition: any;
  season: any;
  standings: any[] = [];
  constructor(private footballService: FootballDataService) {}

  ngOnInit(): void {
    this.footballService.getStanding("BSA")
    .subscribe({
      next : (data) => {
        this.area = data["area"],
        this.competition = data["competition"];
        this.standings = data["standings"];
         
      }
    })
  }
}
