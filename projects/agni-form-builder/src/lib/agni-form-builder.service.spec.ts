import { TestBed } from '@angular/core/testing';

import { AgniFormBuilderService } from './agni-form-builder.service';

describe('AgniFormBuilderService', () => {
  let service: AgniFormBuilderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgniFormBuilderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
