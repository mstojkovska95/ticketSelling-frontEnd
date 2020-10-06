import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private url :string ="http://localhost:3000/contactMessage";

  constructor(private http:HttpClient) { }

  register(userMessage){
    return this.http.post(this.url, userMessage);
  }
}
