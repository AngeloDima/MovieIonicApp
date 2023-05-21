import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { iMovie } from './models/movie';


@Injectable({
  providedIn: 'root'
})
export class DatiService {

  url = "http://www.omdbapi.com/?i=tt3896198&apikey=16128fa2"

  constructor(private http: HttpClient) { }

  getData(): Observable<iMovie> {
    return this.http.get<iMovie>(this.url)
  }

}


