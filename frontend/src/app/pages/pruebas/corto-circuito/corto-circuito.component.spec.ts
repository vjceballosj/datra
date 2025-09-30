import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CortoCircuitoComponent } from './corto-circuito.component';

describe('CortoCircuito', () => {
  let component: CortoCircuitoComponent;
  let fixture: ComponentFixture<CortoCircuitoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CortoCircuitoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CortoCircuitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
