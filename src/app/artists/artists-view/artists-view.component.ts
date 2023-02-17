import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtistObject } from 'src/libs/openapi';

@Component({
  selector: 'app-artists-view',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './artists-view.component.html',
  styleUrls: ['./artists-view.component.scss']
})
export class ArtistsViewComponent {

  @Input() artists: ArtistObject[] = [];

}
