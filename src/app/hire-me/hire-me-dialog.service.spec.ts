import { TestBed, inject } from '@angular/core/testing';

import { HireMeDialogService } from './hire-me-dialog.service';

describe('HireMeDialogService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HireMeDialogService]
    });
  });

  it('should be created', inject([HireMeDialogService], (service: HireMeDialogService) => {
    expect(service).toBeTruthy();
  }));
});
