import { Component } from '@angular/core';
import { FootballDataService } from '../../football-data.service';

@Component({
  selector: 'app-primeira-liga-standing',
  templateUrl: './primeira-liga-standing.component.html',
  styleUrl: './primeira-liga-standing.component.css'
})
export class PrimeiraLigaStandingComponent {
  area: any;
  competition: any;
  season: any;
  standings: any[] = [];
  constructor(private footballService: FootballDataService) {}

  ngOnInit(): void {
    this.footballService.getStanding("PPL")
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
