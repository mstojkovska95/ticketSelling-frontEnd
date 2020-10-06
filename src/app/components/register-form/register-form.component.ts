import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators } from '@angular/forms'
import {RegistrationService} from '../../services/registration.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  get firstName() {
    return this.registrationForm.get('firstName');
  }

  get lastName() {
    return this.registrationForm.get('lastName');
  }

  get email() {
    return this.registrationForm.get('email');
  }
  get password() {
    return this.registrationForm.get('password');
  }
  get phoneNumber() {
    return this.registrationForm.get('phoneNumber');
  }

  get city() {
    return this.registrationForm.get('city');
  }
  get country() {
    return this.registrationForm.get('country');
  }


 


  constructor(private fb: FormBuilder, private registrationService:RegistrationService){}

  registrationForm = this.fb.group({
    firstName:['',Validators.required],
    lastName: ['',Validators.required],
    email:['',[Validators.required, Validators.email]],
    password:['',[Validators.required,Validators.minLength(8)]],
    phoneNumber:['',[Validators.required,Validators.pattern('[0-9]{9}')]],
    city:['',Validators.required],
    country:['',Validators.required]

  });

  onSubmit(){
    this.registrationService.register(this.registrationForm.value)
    .subscribe(
      response => console.log('Succsess',response),
      error => console.log('Error',error)
    );

    this.registrationForm.reset();
  }

  ngOnInit(): void {
  }

}
