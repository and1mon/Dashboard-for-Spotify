import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistoryViewComponent } from './history-view/history-view.component';
import { Store } from '@ngrx/store';
import { AppState } from '../state/app.state';
import { loadHistory } from '../state/history/history.actions';
import { selectAllHistoryEntries, selectHistoryLoadingState } from '../state/history/history.selector';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [CommonModule, HistoryViewComponent],
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent {

  @Input() amount = 50;
  @Input() columnView = false;

  loadingState$?: Observable<"pending" | "loading" | "error" | "success">;
  history$ = this.store.select(selectAllHistoryEntries(this.amount));


  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.loadingState$ = this.store.select(selectHistoryLoadingState());
    this.store.dispatch(loadHistory({ amount: this.amount }));
  }

}
