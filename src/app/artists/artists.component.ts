import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtistObject } from 'src/libs/openapi';
import { SpotifyService } from '../services/spotify.service';
import { ArtistsViewComponent } from './artists-view/artists-view.component';
import { Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { loadArtists } from '../state/artists/artists.actions';
import { selectAllArtistsLongTerm, selectAllArtistsMediumTerm, selectAllArtistsShortTerm } from '../state/artists/artists.selector';
import { AppState } from '../state/app.state';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-artists',
  standalone: true,
  imports: [CommonModule, ArtistsViewComponent],
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.scss']
})
export class ArtistsComponent implements OnInit {

  @Input()
  amount = 50;

  timeRangeSub: Subscription | undefined;
  artists$: Observable<ArtistObject[]> | undefined;

  constructor(private store: Store<AppState>, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.timeRangeSub = this.route.queryParams.subscribe(() => {

      let timeRange = this.route.snapshot.queryParams["timeRange"];
      timeRange = timeRange ? timeRange : "short_term";
      this.store.dispatch(loadArtists({ amount: this.amount, timeRange: timeRange }));
      this.artists$ = this.selectArtists(timeRange);

    })
  }

  ngOnDestroy(): void {
    this.timeRangeSub?.unsubscribe();
  }

  private selectArtists(timeRange: string) {
    switch (timeRange) {
      case "medium_term":
        return this.store.select(selectAllArtistsMediumTerm(this.amount));
      case "long_term":
        return this.store.select(selectAllArtistsLongTerm(this.amount));
      default:
        return this.store.select(selectAllArtistsShortTerm(this.amount));
    }
  }
}
