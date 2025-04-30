import { TestBed } from '@angular/core/testing';

import { Ejercicio1Service } from './ejercicio1.service';

describe('Ejercicio1Service', () => {
  let service: Ejercicio1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Ejercicio1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
