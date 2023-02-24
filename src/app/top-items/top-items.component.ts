import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtistsComponent } from '../artists/artists.component';
import { TracksComponent } from '../tracks/tracks.component';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-top-items',
  standalone: true,
  imports: [CommonModule, ArtistsComponent, TracksComponent, RouterModule],
  templateUrl: './top-items.component.html',
  styleUrls: ['./top-items.component.scss']
})
export class TopItemsComponent {

  constructor(private router: Router) { }

  public selectTimeRange(event: Event) {
    let select = event.target as HTMLSelectElement;
    this.router.navigate([], { queryParams: { timeRange: select.value } });
  }

}