import {createReducer, on} from '@ngrx/store';
import {MovieState} from '@app/ngrx/movie/movie.state';
import {
  searchMovie,
  searchMovies,
  searchMoviesFailure,
  searchMoviesSuccess
} from '@app/ngrx/movie/movie.action';

export const initialState: MovieState = {
  movies: [],
  loading: false,
  error: null
};

export const movieReducer = createReducer(
  initialState,
  on(searchMovies, state => ({
    ...state,
    loading: true,
    error: null
  })),
  on(searchMovie, state => ({
    ...state,
    loading: true,
    error: null
  })),
  on(searchMoviesSuccess, (state, {movies}) => ({
    ...state,
    movies,
    loading: false
  })),
  on(searchMoviesFailure, (state, {error}) => ({
    ...state,
    loading: false,
    error
  }))
);
