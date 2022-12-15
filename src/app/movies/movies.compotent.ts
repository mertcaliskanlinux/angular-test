import { Component } from "@angular/core";
import { Movie } from "../movie";

@Component({
    selector:'movies', //<movies></movies>    
    templateUrl:'./movies.component.html',    
    styleUrls:['./movies.compotent.css']
})

export class MoviesComponent{
    title = 'Film Listesi'

    movie : Movie = {
        id :1,
        name : 'Movie Name'
    };

    getTitle(){
        return this.title
    }
}
