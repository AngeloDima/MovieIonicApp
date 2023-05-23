import { Component, OnInit } from '@angular/core';
import { DatiService } from '../dati.service';
import { SearchResponse } from '../models/movie';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
})
export class MovieComponent implements OnInit {

  data?: SearchResponse
  searchQuery = ""
  selectedType = ""

  constructor(private datiService: DatiService) { }



  cerca() {
    this.datiService.search(this.searchQuery, this.selectedType).subscribe(sr => {
      this.data = sr
      console.log(sr)
      console.log(this.data)
    })
  }

  ngOnInit(): void {
  }

  prova() {
    console.log("ciao")
  }

}



