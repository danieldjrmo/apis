import { TestBed } from '@angular/core/testing';

import { ForumsServices } from './forums-services';

describe('ForumsServices', () => {
  let service: ForumsServices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ForumsServices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
