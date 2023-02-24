import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtistObject, TrackObject } from 'src/libs/openapi';

@Component({
  selector: 'app-tracks-view',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tracks-view.component.html',
  styleUrls: ['./tracks-view.component.scss']
})
export class TracksViewComponent {


  @Input() tracks: TrackObject[] = [];
  @Input() columnView = false;
  @Input() loadingState: "pending" | "loading" | "error" | "success" = "loading";
  @Input() expectedItems: number = 50;

}
