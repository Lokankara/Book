import {EntityState} from '@ngrx/entity';
import {Movie} from '@app/model/movie.model';

export interface MovieState {
  movies: Movie[];
  loading: boolean;
  error: unknown;
}

export interface AppState {
  movie: MovieState;
  collection: EntityState<string>;
}
