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
export class TracksViewComponent implements OnInit {


  @Input() tracks: TrackObject[] = [];

  trackArtists: ArtistObject[][] = [];

  ngOnInit(): void {
    this.tracks.forEach(track => {
      if (track.album !== undefined) {
        track.album.images[0];
      }

      if (track.artists !== undefined) {
        let tmpArtists: ArtistObject[] = [];

        track.artists.forEach(artist => {
          tmpArtists.push(artist);
        })

        this.trackArtists.push(tmpArtists);
      }
    });
  }

}
