import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InportFileMngComponent } from './inport-file-mng.component';

describe('InportFileMngComponent', () => {
  let component: InportFileMngComponent;
  let fixture: ComponentFixture<InportFileMngComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InportFileMngComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InportFileMngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
