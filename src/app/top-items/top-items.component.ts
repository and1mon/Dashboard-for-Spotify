import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtistsComponent } from '../artists/artists.component';
import { TracksComponent } from '../tracks/tracks.component';

@Component({
  selector: 'app-top-items',
  standalone: true,
  imports: [CommonModule, ArtistsComponent, TracksComponent],
  templateUrl: './top-items.component.html',
  styleUrls: ['./top-items.component.scss']
})
export class TopItemsComponent {

}
