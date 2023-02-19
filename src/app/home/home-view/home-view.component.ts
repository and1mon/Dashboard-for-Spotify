import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrackObject, ArtistObject } from 'src/libs/openapi';

@Component({
  selector: 'app-home-view',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.scss']
})
export class HomeViewComponent {

  @Input() tracks: TrackObject[] = [];
  @Input() artists: ArtistObject[] = [];

}
