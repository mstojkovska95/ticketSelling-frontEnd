import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service';


@Component({
  selector: 'app-concerts',
  templateUrl: './concerts.component.html',
  styleUrls: ['./concerts.component.css']
})
export class ConcertsComponent implements OnInit {

  pageTitle: string = 'Concerts';

  concerts:any[];

  constructor(private dataService:DataService) { }

  ngOnInit() {

    this.dataService.getConcerts()
    .subscribe((data: any[]) =>{
      this.concerts=data;
    
  })


 }
}
