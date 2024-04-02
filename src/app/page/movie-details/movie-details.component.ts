import {Component, OnInit} from '@angular/core';
import {MovieService} from '@app/service/movie.service';
import {ActivatedRoute} from '@angular/router';
import {delay, EMPTY, Observable, tap} from 'rxjs';
import {switchMap} from 'rxjs/operators';
import {MovieDetails} from '@app/model/movie.model';

const MILLIS = 500;

@Component({
  selector: 'app-movie.details',
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.scss'
})
export class MovieDetailsComponent implements OnInit {

  movieDetails$: Observable<MovieDetails> = new Observable<MovieDetails>();

  isLoading: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService) {
    console.log(this.movieDetails$);
  }

  ngOnInit(): void {
    this.isLoading = true;
    this.movieDetails$ = this.route.paramMap.pipe(
      switchMap(params => {
        const id = params.get('id');
        if (id) {
          return this.movieService.getMovieById(id).pipe(
            delay(MILLIS),
            tap(() => {
              this.isLoading = false;
            })
          );
        } else {
          console.error('Movie ID is null');
          return EMPTY;
        }
      })
    );
  }
}
