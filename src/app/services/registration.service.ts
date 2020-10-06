import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  private _url: string = "http://localhost:3000/users";
  constructor(private _http:HttpClient) {}

  register(userData){
    return this._http.post<any>(this._url,userData);
  }
}
