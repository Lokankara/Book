import {BookState} from '@app/ngrx/book/book.state';
import {createFeatureSelector, createSelector} from '@ngrx/store';

export const selectBookState =
  createFeatureSelector<BookState>('books');

export const selectBooksState = createSelector(
  selectBookState,
  (state: BookState) => state
);


export const selectAllBooks = createSelector(
  selectBookState,
  (state: BookState) => state.books
);

export const selectBooksLoading = createSelector(
  selectBooksState,
  (state: BookState) => state.loading
);

export const selectBooksError = createSelector(
  selectBooksState,
  (state: BookState) => state.error
);
