import {Injectable} from '@angular/core';
import {catchError, map, switchMap} from 'rxjs/operators';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {of} from 'rxjs';
import {MovieService} from '@app/service/movie.service';
import {
  searchMovie,
  searchMovies,
  searchMoviesFailure,
  searchMoviesSuccess, searchMovieSuccess
} from '@app/ngrx/movie/movie.action';
import {PaginationService} from '@app/service/pagination.service';

@Injectable()
export class MovieEffects {
  searchMovies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(searchMovies),
      switchMap(({query}) =>
        this.movieService.searchMovies(query, this.paginationService.currentPage).pipe(
          map(movies => searchMoviesSuccess({movies: movies})),
          catchError((error: unknown) => of(searchMoviesFailure({error})))
        )
      )
    )
  );

  searchMovieById$ = createEffect(() =>
    this.actions$.pipe(
      ofType(searchMovie),
      switchMap(({ id }) =>
        this.movieService.getMovieById(id).pipe(
          map(movie => searchMovieSuccess({ movie })),
          catchError((error: unknown) => of(searchMoviesFailure({ error })))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private movieService: MovieService,
    private paginationService: PaginationService
  ) {
    console.log();
  }
}
