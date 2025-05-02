import { TestBed } from '@angular/core/testing';

import { AhorcaditoService } from './ahorcadito.service';

describe('AhorcaditoService', () => {
  let service: AhorcaditoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AhorcaditoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
