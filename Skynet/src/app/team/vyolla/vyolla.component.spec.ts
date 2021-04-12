import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VyollaComponent } from './vyolla.component';

describe('VyollaComponent', () => {
  let component: VyollaComponent;
  let fixture: ComponentFixture<VyollaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VyollaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VyollaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
