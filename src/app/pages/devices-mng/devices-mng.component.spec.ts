import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevicesMngComponent } from './devices-mng.component';

describe('DevicesMngComponent', () => {
  let component: DevicesMngComponent;
  let fixture: ComponentFixture<DevicesMngComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevicesMngComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DevicesMngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
