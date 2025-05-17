import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HighlightDirective } from './highlight.directive';
import { By } from '@angular/platform-browser';

@Component({
  standalone: true,
  imports: [HighlightDirective],
  template: `<div appHighlight>Test Element</div>`
})
class TestHostComponent {}

describe('HighlightDirective', () => {
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TestHostComponent]
    });

    fixture = TestBed.createComponent(TestHostComponent);
    fixture.detectChanges();
  });

  it('should apply background color on mouseenter', () => {
    const div = fixture.debugElement.query(By.css('div'));
    div.triggerEventHandler('mouseenter');
    fixture.detectChanges();

    expect(div.nativeElement.style.backgroundColor).toBe('rgb(245, 245, 245)');
  });

  it('should remove background color on mouseleave', () => {
    const div = fixture.debugElement.query(By.css('div'));
    div.triggerEventHandler('mouseenter');
    fixture.detectChanges();

    div.triggerEventHandler('mouseleave');
    fixture.detectChanges();

    expect(div.nativeElement.style.backgroundColor).toBe('');
  });
});
