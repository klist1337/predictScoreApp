import { Component } from '@angular/core';
import { FootballDataService } from '../../football-data.service';

@Component({
  selector: 'app-eredivisie-standing',
  templateUrl: './eredivisie-standing.component.html',
  styleUrl: './eredivisie-standing.component.css'
})
export class EredivisieStandingComponent {
  area: any;
  competition: any;
  season: any;
  standings: any[] = [];
  constructor(private footballService: FootballDataService) {}

  ngOnInit(): void {
    this.footballService.getStanding("DED")
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
