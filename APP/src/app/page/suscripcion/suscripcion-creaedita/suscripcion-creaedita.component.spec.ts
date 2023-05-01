import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuscripcionCreaeditaComponent } from './suscripcion-creaedita.component';

describe('SuscripcionCreaeditaComponent', () => {
  let component: SuscripcionCreaeditaComponent;
  let fixture: ComponentFixture<SuscripcionCreaeditaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuscripcionCreaeditaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuscripcionCreaeditaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
