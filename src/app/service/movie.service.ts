import {inject, Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {Movie, MovieDetails, MovieResponse} from '@app/model/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private apiKey = '249f222afb1002186f4d88b2b5418b55';

  private apiUrl = 'https://api.themoviedb.org/3/movie/';

  private http = inject(HttpClient);

  searchMovies(query: string, page: number): Observable<Movie[]> {
    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('language', 'en-US')
      .set('query', query)
      .set('page', page.toString());

    return this.http.get<MovieResponse>(`${this.apiUrl}popular`, { params }).pipe(
      map(response => response.results),
      catchError(error => {
        console.error('Error fetching books:', error);
        throw error;
      })
    );
  }

  getMovieById(id: string): Observable<MovieDetails> {
    const params = new HttpParams()
      .set('language', 'en-US')
      .set('api_key', this.apiKey);
    return this.http.get<MovieDetails>(`${this.apiUrl}${id}`, { params });
  }
}
