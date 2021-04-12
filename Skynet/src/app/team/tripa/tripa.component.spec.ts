import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TripaComponent } from './tripa.component';

describe('TripaComponent', () => {
  let component: TripaComponent;
  let fixture: ComponentFixture<TripaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TripaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TripaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
