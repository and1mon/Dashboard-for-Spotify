import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TracksViewComponent } from './tracks-view/tracks-view.component';
import { Store } from '@ngrx/store';
import { AppState } from '../state/app.state';
import { selectAllTracksLongTerm, selectAllTracksMediumTerm, selectAllTracksShortTerm, selectTracksLoadingState } from '../state/tracks/tracks.selector';
import { loadTracks } from '../state/tracks/tracks.actions';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { TrackObject } from 'src/libs/openapi';

@Component({
  selector: 'app-tracks',
  standalone: true,
  imports: [CommonModule, TracksViewComponent],
  templateUrl: './tracks.component.html',
  styleUrls: ['./tracks.component.scss']
})
export class TracksComponent implements OnInit, OnDestroy {

  @Input()
  amount = 50;

  @Input() columnView = false;

  timeRangeSub: Subscription | undefined;
  tracks$?: Observable<TrackObject[]>;
  loadingState$?: Observable<"pending" | "loading" | "error" | "success">;


  constructor(private store: Store<AppState>, private route: ActivatedRoute) { }


  ngOnInit(): void {
    this.loadingState$ = this.store.select(selectTracksLoadingState());
    this.timeRangeSub = this.route.queryParams.subscribe(() => {

      let timeRange = this.route.snapshot.queryParams["timeRange"];
      timeRange = timeRange ? timeRange : "short_term";
      this.store.dispatch(loadTracks({ amount: this.amount, timeRange: timeRange }));
      this.tracks$ = this.selectTracks(timeRange);

    })
  }

  ngOnDestroy(): void {
    this.timeRangeSub?.unsubscribe();
  }

  private selectTracks(timeRange: string) {
    switch (timeRange) {
      case "medium_term":
        return this.store.select(selectAllTracksMediumTerm(this.amount));
      case "long_term":
        return this.store.select(selectAllTracksLongTerm(this.amount));
      default:
        return this.store.select(selectAllTracksShortTerm(this.amount));
    }
  }
}
