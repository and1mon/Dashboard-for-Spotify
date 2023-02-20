import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrackObject, ArtistObject, PlayHistoryObject } from 'src/libs/openapi';
import { CustomDatePipe } from 'src/app/custom.datepipe';

@Component({
  selector: 'app-home-view',
  standalone: true,
  imports: [CommonModule, CustomDatePipe],
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.scss']
})
export class HomeViewComponent {

  @Input() tracks: TrackObject[] = [];
  @Input() artists: ArtistObject[] = [];
  @Input() history: PlayHistoryObject[] = [];

}
