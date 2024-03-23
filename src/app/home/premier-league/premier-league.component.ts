import { Component, OnInit } from '@angular/core';
import { FootballDataService } from '../../football-data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ShareDataService } from '../../share-data.service';
import { LocalService } from '../../local.service';



@Component({
  selector: 'app-premier-league',
  templateUrl: './premier-league.component.html',
  styleUrl: './premier-league.component.css'
})
export class PremierLeagueComponent implements OnInit {

  matches: any[] = [];
  constructor (private footDataServices: FootballDataService,
    private route:ActivatedRoute, private shareDataService: ShareDataService,
    private router: Router, private localService: LocalService) {}

  ngOnInit(): void {
    //get premiere league match
    this.footDataServices.getMatch(30, "PL")
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
  getAllmatch(matchData: any) {
    this.localService.saveData('matchs', matchData);
  }
  

  setData(data:any) {
    const url = this.router.serializeUrl(this.router.createUrlTree(['/prediction']));
    this.localService.saveData('match', data)
    //this.router.navigateByUrl('/prediction');
   window.open(url, 'targetWindow', 'toolbar=no, location=no, status=no, menubar=no, scrollbars=yes, resizable=yes, width=800, height=800');
  }
}
