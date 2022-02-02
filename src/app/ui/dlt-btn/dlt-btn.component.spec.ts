import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DltBtnComponent } from './dlt-btn.component';

describe('DltBtnComponent', () => {
  let component: DltBtnComponent;
  let fixture: ComponentFixture<DltBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DltBtnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DltBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
