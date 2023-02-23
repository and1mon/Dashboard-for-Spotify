import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistoryViewComponent } from './history-view/history-view.component';
import { Store } from '@ngrx/store';
import { SpotifyService } from '../services/spotify.service';
import { AppState } from '../state/app.state';
import { loadHistory } from '../state/history/history.actions';
import { selectAllHistoryEntries } from '../state/history/history.selector';

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [CommonModule, HistoryViewComponent],
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent {

  amount = 50;

  history$ = this.store.select(selectAllHistoryEntries(this.amount));


  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.dispatch(loadHistory({ amount: this.amount }));
  }

}
