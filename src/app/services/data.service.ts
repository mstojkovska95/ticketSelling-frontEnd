import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private url:string = 'http://localhost:3000/concerts';



  constructor(private http: HttpClient) { }

  public getConcerts(){
    return this.http.get(this.url);
  }

  public getConcert(id: number){
    return this.http.get(`${this.url}/${id}`);
  }
}
