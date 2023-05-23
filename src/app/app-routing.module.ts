import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { MovieComponent } from './movie/movie.component';
import { MovieDettailComponent } from './movie-dettail/movie-dettail.component';

const routes: Routes = [

  {
    path: '',
    component: MovieComponent,
  },

  {
    path: "film",
    component: MovieComponent
  },

  {
    path: "film/:id",
    component: MovieDettailComponent
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
