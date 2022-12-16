import { Component } from '@angular/core';
import { Movies } from '../movie.datasource';
@Component({
  selector: 'movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})

export class MovieComponent {

  title = 'Film Listesi'
  movie = Movies;

}
