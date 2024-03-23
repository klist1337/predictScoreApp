import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ShareDataService } from '../share-data.service';
import { LocalService } from '../local.service';

@Component({
  selector: 'app-prediction',
  templateUrl: './prediction.component.html',
  styleUrl: './prediction.component.css'
})
export class PredictionComponent implements OnInit{
  data : any ;
  constructor(private shareDataService:ShareDataService,
    private localService:LocalService) {}

  ngOnInit(): void { 
    this.data = this.localService.getData('match');
  }
   
  
}
 