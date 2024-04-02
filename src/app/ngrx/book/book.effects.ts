import {Injectable} from '@angular/core';
import {catchError, map, switchMap, take} from 'rxjs/operators';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {BookService} from '@app/service/book.service';
import {
  loadBooks,
  loadBooksFailure,
  loadBooksSuccess
} from '@app/ngrx/book/book.action';
import {of} from 'rxjs';
import {PaginationService} from '@app/service/pagination.service';

@Injectable()
export class BookEffects {
  loadBooks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadBooks),
      switchMap(() => {
        return this.paginationService.currentPage$.pipe(
          take(1),
          switchMap(currentPage => {
            const pageSize = this.paginationService.pageSize;
            return this.bookService.getAllBooks(currentPage, pageSize).pipe(
              map(books => loadBooksSuccess({ books })),
              catchError((error: unknown) => of(loadBooksFailure({ error })))
            );
          })
        );
      })
    )
  );

  constructor(
    private actions$: Actions,
    private bookService: BookService,
    private paginationService: PaginationService
  ) {
    console.log();
  }
}
