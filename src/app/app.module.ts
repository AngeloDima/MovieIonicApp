import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'; // Corretto import
import { FormsModule } from "@angular/forms";


import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { MovieComponent } from './movie/movie.component';
import { MovieDettailComponent } from './movie-dettail/movie-dettail.component';
import { AppRoutingModule } from './app-routing.module';



@NgModule({
  declarations: [AppComponent, MovieComponent, MovieDettailComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule, FormsModule], // Corretto import
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule { }
