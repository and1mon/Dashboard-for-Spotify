import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpotifyService } from '../services/spotify.service';
import { HomeViewComponent } from './home-view/home-view.component';
import { Store } from '@ngrx/store';
import { AppState } from '../state/app.state';
import { selectAllTracksShortTerm } from '../state/tracks/tracks.selector';
import { loadTracks } from '../state/tracks/tracks.actions';
import { selectAllArtistsShortTerm } from '../state/artists/artists.selector';
import { loadArtists } from '../state/artists/artists.actions';
import { loadHistory } from '../state/history/history.actions';
import { selectAllHistoryEntries } from '../state/history/history.selector';

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
  history$ = this.store.select(selectAllHistoryEntries(this.amount));


  constructor(private store: Store<AppState>, private spotify: SpotifyService) { }

  ngOnInit(): void {
    this.store.dispatch(loadTracks({ amount: this.amount, timeRange: "short_term" }));
    this.store.dispatch(loadArtists({ amount: this.amount, timeRange: "short_term" }));
    this.store.dispatch(loadHistory({ amount: this.amount }));
  }
}
