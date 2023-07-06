import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranspoterComponent } from './transpoter.component';

describe('TranspoterComponent', () => {
  let component: TranspoterComponent;
  let fixture: ComponentFixture<TranspoterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TranspoterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TranspoterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
