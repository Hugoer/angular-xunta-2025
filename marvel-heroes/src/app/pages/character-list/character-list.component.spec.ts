import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CharacterListComponent } from './character-list.component';
import { By } from '@angular/platform-browser';
import { CharacterCardComponent } from '../../shared/components/character-card/character-card.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

describe('CharacterListComponent', () => {
  let component: CharacterListComponent;
  let fixture: ComponentFixture<CharacterListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CharacterListComponent,
        CharacterCardComponent,
        CommonModule,
        RouterModule.forRoot([])
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CharacterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should render two character cards', () => {
    const cards = fixture.debugElement.queryAll(By.css('app-character-card'));
    expect(cards.length).toBe(2);
  });

  it('should pass correct name to first character card', () => {
    const name = component.characters[0].name;
    expect(name).toBe('Iron Man');
  });
});
