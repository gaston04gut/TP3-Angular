import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejercicio1P2Component } from './ejercicio1-p2.component';

describe('Ejercicio1P2Component', () => {
  let component: Ejercicio1P2Component;
  let fixture: ComponentFixture<Ejercicio1P2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ejercicio1P2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ejercicio1P2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
