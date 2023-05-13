import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimatedMessageComponent } from './animated-message.component';

describe('AnimatedMessageComponent', () => {
  let component: AnimatedMessageComponent;
  let fixture: ComponentFixture<AnimatedMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimatedMessageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimatedMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
