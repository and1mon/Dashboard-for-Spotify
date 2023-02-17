import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpotifyService } from '../services/spotify.service';
import { ArtistObject, TrackObject } from 'src/libs/openapi';
import { Subscription } from 'rxjs';
import { ArtistsComponent } from '../artists/artists.component';
import { TracksComponent } from '../tracks/tracks.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ArtistsComponent, TracksComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  constructor(private spotifyService: SpotifyService) {

  }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {
  }
}
