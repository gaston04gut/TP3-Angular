import { TestBed } from '@angular/core/testing';

import { Ejercicio2Service } from './ejercicio2.service';

describe('Ejercicio2Service', () => {
  let service: Ejercicio2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Ejercicio2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
