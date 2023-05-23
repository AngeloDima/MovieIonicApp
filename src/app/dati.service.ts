import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin, map, mergeMap, of } from 'rxjs';
import { Movie, SearchResponse } from './models/movie';


@Injectable({
  providedIn: 'root'
})
export class DatiService {

  url = "http://www.omdbapi.com/?apikey=16128fa2&";

  constructor(private http: HttpClient) { }

  search(query: string, type: string = "movie"): Observable<SearchResponse> {
    let urlFi = `${this.url}type=${type}&s=${query}`;
    return this.http.get<SearchResponse>(urlFi).pipe(
      mergeMap(response => {
        if (response && response.Search) {
          //prendo i dettagli dei film
          const movieRequests = response.Search.map(movie => this.getMovieId(movie.imdbID));
          return forkJoin(movieRequests).pipe(
            map(movies => {
              //prendo il rating
              response.Search.forEach((movie, index) => {
                movie.imdbRating = movies[index].imdbRating;
              });
              //alfabetico
              response.Search.sort((a, b) => a.Title.localeCompare(b.Title));
              //decrescente (rating)
              response.Search.sort((a, b) => parseFloat(b.imdbRating) - parseFloat(a.imdbRating));
              return response;
            })
          );
        }
        return of(response);
      })
    );
  }


  getMovieId(id: string) {
    let url = `${this.url}i=${id}`;
    return this.http.get<Movie>(url)

  }

}

