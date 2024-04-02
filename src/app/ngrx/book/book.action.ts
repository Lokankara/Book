import {createAction, props} from '@ngrx/store';
import {Book} from '@app/model/book';

export const loadBooks = createAction(
  '[Book] Load Books',
  props<{ currentPage: number, pageSize: number, totalItems: number }>()
);

export const loadBooksSuccess = createAction(
  '[Book] Load Books Success',
  props<{ books: Book[] }>()
);

export const loadBooksFailure = createAction(
  '[Book] Load Books Failure',
  props<{ error: unknown }>()
);
