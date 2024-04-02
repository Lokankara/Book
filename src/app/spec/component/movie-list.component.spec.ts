import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MovieListComponent } from '@app/page/movie-list/movie-list.component';
import {
  ActionsSubject,
  ReducerManager, ReducerManagerDispatcher,
  StateObservable,
  Store, StoreModule
} from '@ngrx/store';

describe('MovieListComponent', () => {
  let component: MovieListComponent;
  let fixture: ComponentFixture<MovieListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MovieListComponent],
      providers: [
        Store,
        ReducerManager,
        ActionsSubject,
        StoreModule,
        StateObservable,
        ReducerManagerDispatcher
      ],
      imports: [
        StoreModule.forRoot({})
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(MovieListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
