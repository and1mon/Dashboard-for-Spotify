import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TracksViewComponent } from './tracks-view/tracks-view.component';
import { Store } from '@ngrx/store';
import { AppState } from '../state/app.state';
import { selectAllTracksShortTerm } from '../state/tracks/tracks.selector';
import { loadTracks } from '../state/tracks/tracks.actions';

@Component({
  selector: 'app-tracks',
  standalone: true,
  imports: [CommonModule, TracksViewComponent],
  templateUrl: './tracks.component.html',
  styleUrls: ['./tracks.component.scss']
})
export class TracksComponent implements OnInit {

  @Input()
  amount = 10;

  tracks$ = this.store.select(selectAllTracksShortTerm(this.amount));

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.dispatch(loadTracks({ amount: this.amount, timeRange: "short_term" }));
  }
}
