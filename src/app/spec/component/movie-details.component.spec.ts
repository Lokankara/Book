import {ComponentFixture, TestBed} from '@angular/core/testing';
import {ActivatedRoute, convertToParamMap} from '@angular/router';
import {BehaviorSubject} from 'rxjs';
import {
  MovieDetailsComponent
} from '@app/page/movie-details/movie-details.component';
import {HttpClientModule} from '@angular/common/http';

describe('MovieDetailsComponent', () => {
  let component: MovieDetailsComponent;
  let fixture: ComponentFixture<MovieDetailsComponent>;

  beforeEach(async () => {
    const paramMap = new BehaviorSubject(convertToParamMap({id: '1'}));
    const activatedRouteStub = {
      paramMap,
      snapshot: {
        paramMap: paramMap.value
      }
    };

    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [MovieDetailsComponent],
      providers: [
        {provide: ActivatedRoute, useValue: activatedRouteStub}
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(MovieDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
