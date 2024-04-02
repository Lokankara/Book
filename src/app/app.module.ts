import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {AppComponent} from '@app/app.component';
import {BookService} from '@app/service/book.service';
import {AsyncPipe, NgForOf, NgIf, NgOptimizedImage} from '@angular/common';
import {MovieEffects} from '@app/ngrx/movie/movie.effects';
import {movieReducer} from '@app/ngrx/movie/movie.reducer';
import {MovieListComponent} from '@app/page/movie-list/movie-list.component';
import {RouterModule} from '@angular/router';
import {routes} from '@app/app.routes';
import {BooksPageComponent} from '@app/page/books-page/books-page.component';
import {
  MovieDetailsComponent
} from '@app/page/movie-details/movie-details.component';
import {LoaderComponent} from '@app/share/loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    BooksPageComponent,
    MovieListComponent,
    MovieDetailsComponent
  ],
  imports: [
    NgIf,
    NgForOf,
    AsyncPipe,
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot({movies: movieReducer}),
    EffectsModule.forRoot([MovieEffects]),
    StoreDevtoolsModule.instrument({maxAge: 25}),
    NgOptimizedImage,
    RouterModule.forRoot(routes),
    LoaderComponent
  ],
  providers: [BookService],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})

export class AppModule {
}
