import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {PaginationService} from '@app/service/pagination.service';
import {AppState} from '@app/ngrx/movie/movie.state';
import {
  selectError,
  selectLoading,
  selectMovies
} from '@app/ngrx/movie/movie.selectors';
import {searchMovies} from '@app/ngrx/movie/movie.action';
import {Router} from '@angular/router';
import {Movie} from '@app/model/movie.model';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.scss'
})
export class MovieListComponent implements OnInit, OnDestroy {

  private moviesSubscription: Subscription = new Subscription();

  loading$: Observable<boolean>;

  movies$: Observable<Movie[]>;

  error$: Observable<unknown>;

  totalItems: number = 0;

  currentPage: number;

  constructor(
    private router: Router,
    private store: Store<AppState>,
    private readonly paginationService: PaginationService) {
    this.loading$ = this.store.pipe(select(selectLoading));
    this.error$ = this.store.pipe(select(selectError));
    this.movies$ = this.store.pipe(select(selectMovies));
    this.currentPage = this.paginationService.currentPage;
  }

  ngOnDestroy(): void {
    this.moviesSubscription.unsubscribe();
  }

  onPageChange(page: number): void {
    this.paginationService.setCurrentPage(page);
    this.currentPage = page;
    this.fetch();
  }

  ngOnInit() {
    this.fetch();
    this.moviesSubscription = this.movies$.subscribe(movies => console.log(movies));
  }

  private fetch() {
    this.store.dispatch(searchMovies({
      query: '',
      currentPage: this.currentPage,
      pageSize: this.paginationService.pageSize,
      totalItems: this.totalItems
    }));
  }

  getMovieById(id: number) {
    this.router.navigate(['/movies', id]).catch(
      error => console.error('Error navigating to movie details:', error));
  }
}
