import { TestBed } from '@angular/core/testing';

import { Ejercicio3Service } from './ejercicio3.service';

describe('Ejercicio3Service', () => {
  let service: Ejercicio3Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Ejercicio3Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
