import { Component } from '@angular/core';
import { CharacterCardComponent } from '../../shared/components/character-card/character-card.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

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
  characters = [
    {
      name: 'Iron Man',
      image: 'https://static.wikia.nocookie.net/iron-man-armored-adventures/images/8/83/Detail25.jpg',
      description: 'Genius, billionaire, playboy, philanthropist.'
    },
    {
      name: 'Spider-Man',
      image: 'https://static.wikia.nocookie.net/spiderman/images/a/ad/Peter_Parker_%28Earth-616%29_017.png',
      description: 'Friendly neighborhood hero with spider powers.'
    }
  ];
}
