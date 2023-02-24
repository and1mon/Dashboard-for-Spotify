import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtistObject } from 'src/libs/openapi';

@Component({
  selector: 'app-artists-row',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './artists-row.component.html',
  styleUrls: ['./artists-row.component.scss']
})
export class ArtistsRowComponent {

  @Input() artists: ArtistObject[] = [];
  @Input() loadingState: "pending" | "loading" | "error" | "success" = "loading";
  @Input() expectedItems: number = 50;

}
