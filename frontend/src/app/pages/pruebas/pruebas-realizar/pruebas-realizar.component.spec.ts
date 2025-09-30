import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebasRealizarComponent } from './pruebas-realizar.component';

describe('PruebasRealizar', () => {
  let component: PruebasRealizarComponent;
  let fixture: ComponentFixture<PruebasRealizarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PruebasRealizarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PruebasRealizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
