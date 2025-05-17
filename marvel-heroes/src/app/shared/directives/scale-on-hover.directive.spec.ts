import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ScaleOnHoverDirective } from './scale-on-hover.directive';
import { By } from '@angular/platform-browser';

@Component({
  standalone: true,
  imports: [ScaleOnHoverDirective],
  template: `<div appScaleOnHover>Hover Me</div>`
})
class TestHostComponent {}

describe('ScaleOnHoverDirective', () => {
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TestHostComponent]
    });

    fixture = TestBed.createComponent(TestHostComponent);
    fixture.detectChanges();
  });

  it('should scale up on mouseenter', () => {
    const div = fixture.debugElement.query(By.css('div'));
    div.triggerEventHandler('mouseenter');
    fixture.detectChanges();

    expect(div.nativeElement.style.transform).toBe('scale(1.05)');
  });

  it('should scale back on mouseleave', () => {
    const div = fixture.debugElement.query(By.css('div'));
    div.triggerEventHandler('mouseenter');
    fixture.detectChanges();

    div.triggerEventHandler('mouseleave');
    fixture.detectChanges();

    expect(div.nativeElement.style.transform).toBe('scale(1)');
  });
});
