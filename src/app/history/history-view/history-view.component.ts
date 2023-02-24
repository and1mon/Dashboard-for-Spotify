import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayHistoryObject } from 'src/libs/openapi';
import { CustomDatePipe } from 'src/app/custom.datepipe';

@Component({
  selector: 'app-history-view',
  standalone: true,
  imports: [CommonModule, CustomDatePipe],
  templateUrl: './history-view.component.html',
  styleUrls: ['./history-view.component.scss']
})
export class HistoryViewComponent {

  @Input() history: PlayHistoryObject[] = [];
  @Input() columnView = false;
  @Input() loadingState: "pending" | "loading" | "error" | "success" = "loading";
  @Input() expectedItems: number = 50;

}
