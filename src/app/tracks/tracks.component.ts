import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TracksViewComponent } from './tracks-view/tracks-view.component';
import { SpotifyService } from '../services/spotify.service';
import { Store } from '@ngrx/store';
import { AppState } from '../state/app.state';
import { selectAllTracks } from '../state/tracks/tracks.selector';
import { loadTracks } from '../state/tracks/tracks.actions';

@Component({
  selector: 'app-tracks',
  standalone: true,
  imports: [CommonModule, TracksViewComponent],
  templateUrl: './tracks.component.html',
  styleUrls: ['./tracks.component.scss']
})
export class TracksComponent implements OnInit {

  tracks$ = this.store.select(selectAllTracks);

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.dispatch(loadTracks());
  }
}