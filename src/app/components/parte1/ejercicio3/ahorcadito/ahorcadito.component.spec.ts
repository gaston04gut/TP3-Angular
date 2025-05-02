import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AhorcaditoComponent } from './ahorcadito.component';

describe('AhorcaditoComponent', () => {
  let component: AhorcaditoComponent;
  let fixture: ComponentFixture<AhorcaditoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AhorcaditoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AhorcaditoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
