import {ComponentFixture, TestBed} from '@angular/core/testing';
import {BooksPageComponent} from '@app/page/books-page/books-page.component';
import {BooksModule} from '@app/module/books.module';
import {HttpClientModule} from '@angular/common/http';
import {StoreModule} from '@ngrx/store';
import {bookReducer} from '@app/ngrx/book/book.reducer';

describe('BooksPageComponent', () => {
  let component: BooksPageComponent;
  let fixture: ComponentFixture<BooksPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        BooksModule,
        HttpClientModule,
        StoreModule.forRoot({}),
        StoreModule.forFeature('books', bookReducer)
      ],

      declarations: [BooksPageComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(BooksPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
