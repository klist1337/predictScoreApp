import { Component, OnInit } from '@angular/core';
import { FootballDataService } from '../football-data.service';
import { error } from 'console';

interface score {
    winner: string;
    duration: string;
    fullTime: { 
      home:  number;
      away:  number;
    };
    halfTime: { 
      home: number; 
      away: number;
    }
  }

  const SCORES : score[] =[
    {
    winner: 'DRAW',
    duration: 'REGULAR',
    fullTime: { home: 1, away: 1 },
    halfTime: { home: 0, away: 1 }
    },
    {
    winner: 'DRAW',
    duration: 'REGULAR',
    fullTime: { home: 1, away: 1 },
    halfTime: { home: 0, away: 1 }
    },
    {
    winner: 'DRAW',
    duration: 'REGULAR',
    fullTime: { home: 1, away: 1 },
    halfTime: { home: 0, away: 1 }
    },
    {
    winner: 'DRAW',
    duration: 'REGULAR',
    fullTime: { home: 1, away: 1 },
    halfTime: { home: 0, away: 1 }
    },
    {
    winner: 'DRAW',
    duration: 'REGULAR',
    fullTime: { home: 1, away: 1 },
    halfTime: { home: 0, away: 1 }
    },
    {
    winner: 'DRAW',
    duration: 'REGULAR',
    fullTime: { home: 1, away: 1 },
    halfTime: { home: 0, away: 1 }
    },
    {
    winner: 'DRAW',
    duration: 'REGULAR',
    fullTime: { home: 1, away: 1 },
    halfTime: { home: 0, away: 1 }
    },
    {
    winner: 'DRAW',
    duration: 'REGULAR',
    fullTime: { home: 1, away: 1 },
    halfTime: { home: 0, away: 1 }
    },
    {
    winner: 'DRAW',
    duration: 'REGULAR',
    fullTime: { home: 1, away: 1 },
    halfTime: { home: 0, away: 1 }
    },
    {
    winner: 'DRAW',
    duration: 'REGULAR',
    fullTime: { home: 1, away: 1 },
    halfTime: { home: 0, away: 1 }
    },

  ]

@Component({
  selector: 'app-live-score',
  templateUrl: './live-score.component.html',
  styleUrl: './live-score.component.css'
})
export class LiveScoreComponent implements OnInit{
  score = SCORES;
  matches: any[] = [];
  constructor(private footBallService: FootballDataService) {}

  ngOnInit(): void {
    this.footBallService.getMatchOfTheDay()
    .subscribe({
      next: (data) => {
        this.matches = data['matches'],
        console.log(this.matches[0]);
      },
      error: (error) => console.error(error),
    })
    // this.footBallService.getYesterdayMatch()
    // .subscribe({
    //   next: (data) => {
    //     this.matches = data['matches'];
    //   },
    //   error: (error) => console.error(error),
    // })
  }

  hourFormat(date:string) : string {
   return this.footBallService.hourFormat(date);
  }
  getHtGoal(score: string) {
    if (score !== null)
      return `(${score})`;
    return ('');
  }
  getFtGoal(score: string) {
    if (score !== null)
      return score;
    return('');
  }

  
}
