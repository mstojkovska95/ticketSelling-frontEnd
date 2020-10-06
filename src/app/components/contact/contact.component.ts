import { Component, OnInit } from '@angular/core';
import {ContactService} from '../../services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  phone:any = ' +02 7774994';
  _email:any = ' email@xmail.com';
  constructor(private contactService:ContactService) { }

  ngOnInit(): void {

  }

  onSubmit(data: any) {
    this.contactService.register(data).subscribe((r) => {
      console.log(data);
    })
    
  }

}
