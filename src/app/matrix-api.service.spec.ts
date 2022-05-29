import { TestBed } from '@angular/core/testing';

import { MatrixAPIService } from './matrix-api.service';

describe('MatrixAPIService', () => {
  let service: MatrixAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MatrixAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
