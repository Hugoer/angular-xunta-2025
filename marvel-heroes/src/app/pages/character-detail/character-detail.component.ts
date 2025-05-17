import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SwapiService } from '../../core/services/swapi.service';
import { CommonModule } from '@angular/common';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-character-detail',
  standalone: true,
  imports: [CommonModule, AsyncPipe],
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.scss']
})
export class CharacterDetailComponent {
  private route = inject(ActivatedRoute);
  private starWarsService = inject(SwapiService);

  character$ = this.starWarsService.getCharacterById(Number(this.route.snapshot.paramMap.get('id')));
}
