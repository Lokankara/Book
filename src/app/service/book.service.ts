import {inject, Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Book} from '@app/model/book';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private http = inject(HttpClient);

  private apiUrl = 'https://book-691o.onrender.com/api/books';

  getAllBooks(page: number, size: number): Observable<Book[]> {
    const params = new HttpParams().set('page', page.toString()).set('size', size.toString());

    return this.http.get<Book[]>(this.apiUrl, { params }).pipe(
      catchError(error => {
        console.error('Error fetching books:', error);
        throw error;
      })
    );
  }
}
