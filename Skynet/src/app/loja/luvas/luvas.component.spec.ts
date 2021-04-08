import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LuvasComponent } from './luvas.component';

describe('LuvasComponent', () => {
  let component: LuvasComponent;
  let fixture: ComponentFixture<LuvasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LuvasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LuvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
