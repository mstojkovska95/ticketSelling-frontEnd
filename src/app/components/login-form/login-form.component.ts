import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {


  constructor( public router:Router) { }

  onSubmit(data:any){
    console.log(data);
    this.router.navigate(['home'])
    
  }
  

  ngOnInit(): void {
   
  }

}
