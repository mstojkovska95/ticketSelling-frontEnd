import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-concert-details',
  templateUrl: './concert-details.component.html',
  styleUrls: ['./concert-details.component.css']
})
export class ConcertDetailsComponent implements OnInit {

  concert:any = [];

  constructor(private route:ActivatedRoute,private dataService:DataService) {}

  ngOnInit(): void {

    let id = this.route.snapshot.params['id'];
    this.dataService.getConcert(id).subscribe(c => {
      this.concert = c;
      console.log(c);
    })

  }

}
