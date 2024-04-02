import {createReducer, on} from '@ngrx/store';
import {
  loadBooks,
  loadBooksFailure,
  loadBooksSuccess
} from '@app/ngrx/book/book.action';
import {BookState} from '@app/ngrx/book/book.state';

export const initialState: BookState = {
  books: [],
  loading: false,
  error: null
};

export const bookReducer = createReducer(
  initialState,
  on(loadBooks, state => ({
    ...state,
    loading: true,
    error: null
  })),
  on(loadBooksSuccess, (state, { books }) => ({
    ...state,
    books,
    loading: false
  })),
  on(loadBooksFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error: error
  }))
);
