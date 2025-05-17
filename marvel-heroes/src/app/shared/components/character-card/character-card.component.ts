import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-character-card',
  standalone: true,
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.scss']
})
export class CharacterCardComponent {
  @Input() name: string = 'Character Name';
  @Input() image: string = '';
  @Input() description: string = 'Short description goes here.';
}