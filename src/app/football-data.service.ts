import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment.development';
import { Observable } from 'rxjs';
import { Match } from './interfaces';
import { NavigationEnd, Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class FootballDataService {

  constructor(private http: HttpClient, private router: Router) {
    
  }

  private subscribeToRouterEvents(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        console.log('NavigationEnd event:', event);
      }
    });
  }

  getMatch(matchday: number, code: string) : Observable<any> {
    // cachebuster add time to url to ensure that the browser make each request as unique
    const url = `/api/v4/competitions/${code}/matches?matchday=${matchday}`;
    const headers = new HttpHeaders({
      'X-Auth-token': environment.footballDataApiToken,
      'Cache-Control': 'no-cache',
    });
    return this.http.get<any>(url, {headers});
  }
  
  getMatchOfTheDay() :  Observable<any>  {
    const url = '/api/v4/matches';
    const headers = new HttpHeaders({
      'X-Auth-Token': environment.footballDataApiToken,
      'Cache-Control': 'no-cache',
    });
    return this.http.get<any>(url, {headers});
  }

  getYesterdayMatch(): Observable<any> {
    const url = '/api/v4/matches?date=YESTERDAY';
    const headers = new HttpHeaders({
      'X-Auth-Token': environment.footballDataApiToken,
      'Cache-Control': 'no-cache',
    })
    return (this.http.get<any>(url, {headers}));
  }

  getStanding(code: string) {
    const url = `/api/v4/competitions/${code}/standings`;
    const headers = new HttpHeaders({
      'X-Auth-Token': environment.footballDataApiToken,
      'Cache-Control': 'no-cache',
    })
    return this.http.get<any>(url, {headers});
  }
  
  hourFormat(date:string) : string {
    let hour = date.split('T')[1];
    hour = hour.split(':00Z')[0];
    return hour;
  }
}
