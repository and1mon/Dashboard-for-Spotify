import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpotifyService } from '../services/spotify.service';
import { ArtistObject, TrackObject } from 'src/libs/openapi';
import { Subscription } from 'rxjs';
import { ArtistsComponent } from '../artists/artists.component';
import { TracksComponent } from '../tracks/tracks.component';
import { HomeViewComponent } from './home-view/home-view.component';
import { Store } from '@ngrx/store';
import { AppState } from '../state/app.state';
import { selectAllTracksShortTerm } from '../state/tracks/tracks.selector';
import { loadTracks } from '../state/tracks/tracks.actions';
import { selectAllArtistsShortTerm } from '../state/artists/artists.selector';
import { loadArtists } from '../state/artists/artists.actions';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HomeViewComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  amount = 10;

  tracks$ = this.store.select(selectAllTracksShortTerm(this.amount));
  artists$ = this.store.select(selectAllArtistsShortTerm(this.amount));


  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.dispatch(loadTracks({ amount: this.amount, timeRange: "short_term" }));
    this.store.dispatch(loadArtists({ amount: this.amount, timeRange: "short_term" }));
  }
}
