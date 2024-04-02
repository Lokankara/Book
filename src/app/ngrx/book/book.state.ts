import {Book} from '@app/model/book';

export interface BookState {
  books: Book[];
  loading: boolean;
  error: unknown;
}
