import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatosALaCartaComponent } from './platos-a-la-carta.component';

describe('PlatosALaCartaComponent', () => {
  let component: PlatosALaCartaComponent;
  let fixture: ComponentFixture<PlatosALaCartaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlatosALaCartaComponent]
    });
    fixture = TestBed.createComponent(PlatosALaCartaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
