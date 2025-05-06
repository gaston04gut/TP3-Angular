import { TestBed } from '@angular/core/testing';

import { Ejercicio1P2Service } from './ejercicio1-p2.service';

describe('Ejercicio1P2Service', () => {
  let service: Ejercicio1P2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Ejercicio1P2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
