import { Routes } from '@angular/router';
import {
  MovieDetailsComponent
} from '@app/page/movie-details/movie-details.component';
import {MovieListComponent} from '@app/page/movie-list/movie-list.component';

export const routes: Routes = [
  { path: 'movies/:id', component: MovieDetailsComponent },
  { path: '', component: MovieListComponent }
];
