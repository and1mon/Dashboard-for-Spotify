import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtistObject, TrackObject } from 'src/libs/openapi';
import { SpotifyService } from '../services/spotify.service';
import { ArtistsViewComponent } from './artists-view/artists-view.component';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { loadArtists } from '../state/artists/artists.actions';
import { selectAllArtistsShortTerm } from '../state/artists/artists.selector';
import { AppState } from '../state/app.state';


@Component({
  selector: 'app-artists',
  standalone: true,
  imports: [CommonModule, ArtistsViewComponent],
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.scss']
})
export class ArtistsComponent implements OnInit {

  @Input()
  amount = 10;

  artists$ = this.store.select(selectAllArtistsShortTerm(this.amount));

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.dispatch(loadArtists({ amount: this.amount, timeRange: "short_term" }));
  }
}
