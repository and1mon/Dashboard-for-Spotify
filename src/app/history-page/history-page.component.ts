import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistoryComponent } from '../history/history.component';

@Component({
  selector: 'app-history-page',
  standalone: true,
  imports: [CommonModule, HistoryComponent],
  templateUrl: './history-page.component.html',
  styleUrls: ['./history-page.component.scss']
})
export class HistoryPageComponent {

}
