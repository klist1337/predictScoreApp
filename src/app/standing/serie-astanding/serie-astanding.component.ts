import { Component } from '@angular/core';
import { FootballDataService } from '../../football-data.service';

@Component({
  selector: 'app-serie-astanding',
  templateUrl: './serie-astanding.component.html',
  styleUrl: './serie-astanding.component.css'
})
export class SerieAStandingComponent {
  area: any;
  competition: any;
  season: any;
  standings: any[] = [];
  constructor(private footballService: FootballDataService) {}

  ngOnInit(): void {
    this.footballService.getStanding("SA")
    .subscribe({
      next : (data) => {
        this.area = data["area"],
        this.competition = data["competition"];
        this.standings = data["standings"];
         
      }
    })
  }
}
