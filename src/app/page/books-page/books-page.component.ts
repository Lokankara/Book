import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {Book} from '@app/model/book';
import {
  selectAllBooks,
  selectBooksError,
  selectBooksLoading
} from '@app/ngrx/book/book.selectors';
import {loadBooks} from '@app/ngrx/book/book.action';
import {PaginationService} from '@app/service/pagination.service';
import {HttpClient} from '@angular/common/http';
import {BookState} from '@app/ngrx/book/book.state';

@Component({
  selector: 'app-books-page',
  templateUrl: './books-page.component.html',
  styleUrl: './books-page.component.scss'
})
export class BooksPageComponent implements OnInit {

  loading$: Observable<boolean>;

  error$: Observable<unknown>;

  books$: Observable<Book[]>;

  totalItems: number = 0;

  currentPage: number;

  private http: HttpClient;

  constructor(
    http: HttpClient,
    private store: Store<BookState>,
    private readonly paginationService: PaginationService) {
    this.http = http;
    this.loading$ = this.store.pipe(select(selectBooksLoading));
    this.error$ = this.store.pipe(select(selectBooksError));
    this.books$ = this.store.pipe(select(selectAllBooks));
    this.currentPage = this.paginationService.currentPage;
  }

  onPageChange(page: number): void {
    this.paginationService.setCurrentPage(page);
    this.currentPage = page;
    this.fetch();
  }

  ngOnInit() {
    this.fetch();
    this.books$.subscribe(books => console.log(books));
  }

  private fetch() {
    this.store.dispatch(loadBooks({
      currentPage: this.currentPage,
      pageSize: this.paginationService.pageSize,
      totalItems: this.totalItems
    }));
  }
}
