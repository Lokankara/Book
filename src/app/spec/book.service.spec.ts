import {TestBed} from '@angular/core/testing';

import {BookService} from '@app/service/book.service';
import {HttpClientModule} from '@angular/common/http';

describe('BookServiceService', () => {
  let service: BookService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [BookService]
    });
    service = TestBed.inject(BookService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
