import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CharacterCardComponent } from './character-card.component';
import { By } from '@angular/platform-browser';

describe('CharacterCardComponent', () => {
  let component: CharacterCardComponent;
  let fixture: ComponentFixture<CharacterCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharacterCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CharacterCardComponent);
    component = fixture.componentInstance;
    component.name = 'Iron Man';
    component.image = 'https://example.com/ironman.jpg';
    component.description = 'Genius, billionaire, playboy, philanthropist.';
    fixture.detectChanges();
  });

  it('should display character name', () => {
    const titleEl = fixture.debugElement.query(By.css('.card__title')).nativeElement;
    expect(titleEl.textContent).toContain('Iron Man');
  });

  it('should display character image', () => {
    const imgEl = fixture.debugElement.query(By.css('img')).nativeElement;
    expect(imgEl.src).toContain('ironman.jpg');
  });

  it('should display character description', () => {
    const descEl = fixture.debugElement.query(By.css('.card__description')).nativeElement;
    expect(descEl.textContent).toContain('Genius');
  });
});
// The test suite for the CharacterCardComponent is designed to ensure that the component correctly displays the character's name, image, and description.