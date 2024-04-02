import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { PaginationService } from '../service/pagination.service';

describe('PaginationService', () => {
  let service: PaginationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(PaginationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
