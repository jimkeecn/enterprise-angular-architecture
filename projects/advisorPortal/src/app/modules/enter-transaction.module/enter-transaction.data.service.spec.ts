import { TestBed } from "@angular/core/testing";

import { EnterTransactionDataService } from "./enter-transaction.data.service";

describe("EnterTransaction.DataService", () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it("should be created", () => {
    const service: EnterTransactionDataService = TestBed.get(
      EnterTransactionDataService
    );
    expect(service).toBeTruthy();
  });
});
