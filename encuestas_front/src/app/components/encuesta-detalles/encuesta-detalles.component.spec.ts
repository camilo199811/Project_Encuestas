import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncuestaDetallesComponent } from './encuesta-detalles.component';

describe('EncuestaDetallesComponent', () => {
  let component: EncuestaDetallesComponent;
  let fixture: ComponentFixture<EncuestaDetallesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EncuestaDetallesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EncuestaDetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
