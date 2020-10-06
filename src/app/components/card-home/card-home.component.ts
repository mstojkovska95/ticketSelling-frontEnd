import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-card-home',
  templateUrl: './card-home.component.html',
  styleUrls: ['./card-home.component.css']
})
export class CardHomeComponent implements OnInit {

  @Input() cardImg: string;
  @Input() cardHeader: string;
  @Input() cardText: string;

  constructor() { }

  ngOnInit(): void {
  }

}
