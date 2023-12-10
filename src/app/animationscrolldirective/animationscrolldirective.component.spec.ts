import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimationscrolldirectiveComponent } from './animationscrolldirective.component';

describe('AnimationscrolldirectiveComponent', () => {
  let component: AnimationscrolldirectiveComponent;
  let fixture: ComponentFixture<AnimationscrolldirectiveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnimationscrolldirectiveComponent]
    });
    fixture = TestBed.createComponent(AnimationscrolldirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
