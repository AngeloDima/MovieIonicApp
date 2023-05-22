import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SearchResponse } from './models/movie';


@Injectable({
  providedIn: 'root'
})
export class DatiService {

  url = "http://www.omdbapi.com/?apikey=16128fa2&";

  constructor(private http: HttpClient) { }

  search(query: string, type: string = "movie"): Observable<SearchResponse> {
    let urlFi = `${this.url}type=${type}&s=${query}`;
    return this.http.get<SearchResponse>(urlFi)
  }



}




  // getData(): Observable<SearchResponse> {
  //   return this.http.get<SearchResponse>(this.url)
  // }
