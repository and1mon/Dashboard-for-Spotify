import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { OAuthService } from "angular-oauth2-oidc";
import { map, Observable } from "rxjs";
import { ArtistObject, Configuration, TrackObject, UsersService } from "src/libs/openapi";

@Injectable()
export class SpotifyService {

    private spotifyUserService: UsersService;

    constructor(private http: HttpClient, private oauth: OAuthService) {
        this.spotifyUserService = new UsersService(this.http, "https://api.spotify.com/v1", new Configuration({ credentials: { "oauth_2_0": this.oauth.getAccessToken() } }))
    }

    public getUserTopArtists(timeRange?: string, limit?: number, offset?: number): Observable<ArtistObject[]> {
        return this.spotifyUserService.getUsersTopArtistsAndTracks("artists", timeRange, limit, offset).pipe(map(response => response.items as ArtistObject[]));
    }

    public getUserTopTracks(timeRange?: string, limit?: number, offset?: number): Observable<TrackObject[]> {
        return this.spotifyUserService.getUsersTopArtistsAndTracks("tracks", timeRange, limit, offset).pipe(map(response => response.items as TrackObject[]));
    }
}