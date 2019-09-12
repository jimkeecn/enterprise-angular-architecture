import { TestBed } from '@angular/core/testing';

import { EnterTransactionService } from './enter-transaction.service';

describe('EnterTransactionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EnterTransactionService = TestBed.get(EnterTransactionService);
    expect(service).toBeTruthy();
  });
});
