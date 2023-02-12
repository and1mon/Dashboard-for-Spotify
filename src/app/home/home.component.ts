import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpotifyService } from '../services/spotify.service';
import { ArtistObject, TrackObject } from 'src/libs/openapi';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  artists?: ArtistObject[];
  private artistSubscription: any;

  tracks?: TrackObject[];
  private trackSubscription: any;

  trackArtists: ArtistObject[][] = [];



  constructor(private spotifyService: SpotifyService) {

  }

  ngOnInit(): void {
    this.artistSubscription = this.spotifyService.getUserTopArtists("short_term", 10).subscribe(data => this.artists = data.items as ArtistObject[]);

    this.trackSubscription = this.spotifyService.getUserTopTracks("short_term", 10).subscribe((data) => {
      this.tracks = data.items as TrackObject[];

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
    });
  }

  ngOnDestroy(): void {
    this.artistSubscription.unsubscribe();
    this.trackSubscription.unsubscribe();
  }




}
