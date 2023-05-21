import { Component, OnInit } from '@angular/core';
import { DatiService } from '../dati.service';
import { iMovie } from '../models/movie';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
})
export class MovieComponent implements OnInit {

  data: iMovie[] = []; // Dichiarato come un array vuoto di oggetti iMovie

  constructor(private datiService: DatiService) { }

  loadData() {
    this.datiService.getData().subscribe((data: iMovie) => {
      this.data = [data];
      console.log(this.data);
    });
  }

  ngOnInit() {
    this.loadData();
  }

}
