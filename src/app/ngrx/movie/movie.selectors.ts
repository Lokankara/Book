import { createSelector, createFeatureSelector } from '@ngrx/store';
import {MovieState} from '@app/ngrx/movie/movie.state';

export const selectMovieState =
  createFeatureSelector<MovieState>('movies');

export const selectMovies = createSelector(
  selectMovieState,
  state => state.movies
);

export const selectLoading = createSelector(
  selectMovieState,
  state => state.loading
);

export const selectError = createSelector(
  selectMovieState,
  state => state.error
);
