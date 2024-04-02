import {createAction, props} from '@ngrx/store';
import {Movie, MovieDetails} from '@app/model/movie.model';

export const searchMovies = createAction(
  '[Movie] Search Movies',
  props<{
    query: string,
    pageSize: number,
    currentPage: number,
    totalItems: number;
  }>());

export const searchMovie = createAction(
  '[Movie] Get Movie By ID',
  props<{ id: string }>()
);

export const searchMovieSuccess = createAction(
  '[Movie] Search Movie Success', props<{ movie: MovieDetails }>());


export const searchMoviesSuccess = createAction(
  '[Movie] Search Movies Success', props<{ movies: Movie[] }>());

export const searchMoviesFailure = createAction(
  '[Movie] Search Movies Failure', props<{ error: unknown }>());
