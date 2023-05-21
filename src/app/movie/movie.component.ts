import { Component, OnInit } from '@angular/core';
import { DatiService } from '../dati.service';
import { iMovie } from '../models/movie';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
})
export class MovieComponent implements OnInit {

  data?: iMovie

  constructor(private DatiService: DatiService) { }

  loadData() {
    this.DatiService.getData().subscribe((data: iMovie) => {
      this.data = data
      console.log(this.data)
    })
  }
  ngOnInit() {
    this.loadData()

  }

}


