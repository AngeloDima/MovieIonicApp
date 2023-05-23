import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/movie';
import { DatiService } from '../dati.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-dettail',
  templateUrl: './movie-dettail.component.html',
  styleUrls: ['./movie-dettail.component.scss'],
})
export class MovieDettailComponent implements OnInit {

  dettail?: Movie

  constructor(private dataService: DatiService, private route: ActivatedRoute) { }



  ngOnInit() {
    let id = this.route.snapshot.paramMap.get("id")
    if (id != null) {
      this.dataService.getMovieId(id).subscribe(dettail => this.dettail = dettail)
    }
  }

}



