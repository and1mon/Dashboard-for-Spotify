import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtistObject } from 'src/libs/openapi';
import { SpotifyService } from '../services/spotify.service';
import { ArtistsViewComponent } from './artists-view/artists-view.component';
import { Observable, Subscription } from 'rxjs';
import { MemoizedSelector, Store } from '@ngrx/store';
import { loadArtists } from '../state/artists/artists.actions';
import { selectAllArtistsLongTerm, selectAllArtistsMediumTerm, selectAllArtistsShortTerm, selectArtistsLoadingState } from '../state/artists/artists.selector';
import { AppState } from '../state/app.state';
import { ActivatedRoute } from '@angular/router';
import { ArtistsRowComponent } from './artists-row/artists-row.component';
import { ArtistsState } from '../state/artists/artists.reducer';


@Component({
  selector: 'app-artists',
  standalone: true,
  imports: [CommonModule, ArtistsViewComponent, ArtistsRowComponent],
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.scss']
})
export class ArtistsComponent implements OnInit {

  @Input()
  amount = 50;

  @Input() displayType: "scrollRow" | "list" = "list";

  timeRangeSub: Subscription | undefined;
  artists$: Observable<ArtistObject[]> | undefined;
  loadingState$?: Observable<"pending" | "loading" | "error" | "success">;

  constructor(private store: Store<AppState>, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.loadingState$ = this.store.select(selectArtistsLoadingState());
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
