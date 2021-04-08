import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacasComponent } from './facas.component';

describe('FacasComponent', () => {
  let component: FacasComponent;
  let fixture: ComponentFixture<FacasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
