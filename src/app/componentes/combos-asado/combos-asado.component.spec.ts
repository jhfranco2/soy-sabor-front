import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CombosAsadoComponent } from './combos-asado.component';

describe('CombosAsadoComponent', () => {
  let component: CombosAsadoComponent;
  let fixture: ComponentFixture<CombosAsadoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CombosAsadoComponent]
    });
    fixture = TestBed.createComponent(CombosAsadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
