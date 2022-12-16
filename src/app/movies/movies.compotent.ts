import { Component } from "@angular/core";
import { Movies } from "../movie.datasource";
import { Movie } from "../movie";


@Component({
    selector:'movies', //<movies></movies>    
    templateUrl:'./movies.component.html',    
    styleUrls:['./movies.component.css']
    // ,'../app.style.css'
})

export class MoviesComponent {
    title = 'Film Listesi';
    movies = Movies;
    selectedMovie: Movie;
    
    onSelect(movie: Movie): void {
        this.selectedMovie = movie;
    }
}
