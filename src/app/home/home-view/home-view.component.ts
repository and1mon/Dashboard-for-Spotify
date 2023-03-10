import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrackObject, ArtistObject, PlayHistoryObject } from 'src/libs/openapi';
import { CustomDatePipe } from 'src/app/custom.datepipe';
import { RouterModule } from '@angular/router';
import { TracksComponent } from 'src/app/tracks/tracks.component';
import { HistoryComponent } from 'src/app/history/history.component';
import { ArtistsComponent } from 'src/app/artists/artists.component';

@Component({
  selector: 'app-home-view',
  standalone: true,
  imports: [CommonModule, CustomDatePipe, RouterModule, TracksComponent, HistoryComponent, ArtistsComponent],
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.scss']
})
export class HomeViewComponent {

  @Input() tracks: TrackObject[] = [];
  @Input() artists: ArtistObject[] = [];
  @Input() history: PlayHistoryObject[] = [];

}
