import { Component } from '@angular/core';
import { CharacterCardComponent } from '../../shared/components/character-card/character-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-character-list',
  standalone: true,
  imports: [
    CommonModule,
    CharacterCardComponent,
  ],
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})
export class CharacterListComponent {
  characters = [
    {
      name: 'Iron Man',
      image: 'https://static.wikia.nocookie.net/iron-man-armored-adventures/images/8/83/Detail25.jpg/revision/latest?cb=20120428182906',
      description: 'Genius, billionaire, playboy, philanthropist.'
    },
    {
      name: 'Spider-Man',
      image: 'https://static.wikia.nocookie.net/spiderman/images/a/ad/Peter_Parker_%28Earth-616%29_017.png/revision/latest?cb=20210807043502',
      description: 'Friendly neighborhood hero with spider powers.'
    }
  ];
}
