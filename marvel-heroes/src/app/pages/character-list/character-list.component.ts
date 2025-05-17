import { Component, inject } from '@angular/core';
import { CharacterCardComponent } from '../../shared/components/character-card/character-card.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SwapiService } from '../../core/services/swapi.service';

@Component({
  selector: 'app-character-list',
  standalone: true,
  imports: [
    CommonModule,
    CharacterCardComponent,
    RouterModule,
  ],
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})
export class CharacterListComponent {
  private swapi = inject(SwapiService);
  characters$ = this.swapi.getCharacters();
}
