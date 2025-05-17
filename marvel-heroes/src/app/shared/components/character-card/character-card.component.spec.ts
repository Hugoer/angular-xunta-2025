import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CharacterCardComponent } from './character-card.component';
import { By } from '@angular/platform-browser';

describe('CharacterCardComponent', () => {
  let component: CharacterCardComponent;
  let fixture: ComponentFixture<CharacterCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharacterCardComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(CharacterCardComponent);
    component = fixture.componentInstance;

    // Props simuladas
    component.name = 'Iron Man';
    component.image = 'https://example.com/ironman.jpg';
    component.description = 'Genius, billionaire, playboy, philanthropist.';
    fixture.detectChanges();
  });

  it('should display the character name', () => {
    const title = fixture.debugElement.query(By.css('.card__title')).nativeElement;
    expect(title.textContent).toContain('Iron Man');
  });

  it('should display the character image', () => {
    const img = fixture.debugElement.query(By.css('img')).nativeElement;
    expect(img.src).toContain('ironman.jpg');
  });

  it('should display the character description', () => {
    const desc = fixture.debugElement.query(By.css('.card__description')).nativeElement;
    expect(desc.textContent).toContain('Genius');
  });
});
