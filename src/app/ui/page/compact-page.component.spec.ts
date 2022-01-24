import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompactPageComponent } from './compact-page.component';

describe('CompactPageComponent', () => {
  let component: CompactPageComponent;
  let fixture: ComponentFixture<CompactPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompactPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompactPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
