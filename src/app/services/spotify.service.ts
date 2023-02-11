import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { OAuthService } from "angular-oauth2-oidc";
import { Observable } from "rxjs";
import { Configuration, GetUsersTopArtistsAndTracks200Response, UsersService } from "src/libs/openapi";
import { authCodeFlowConfig } from "../auth.config";

@Injectable()
export class SpotifyService {

    private spotifyUserService: UsersService;

    constructor(private http: HttpClient, private oauth: OAuthService) {
        this.spotifyUserService = new UsersService(this.http, "https://api.spotify.com/v1", new Configuration({ credentials: { "oauth_2_0": this.oauth.getAccessToken() } }))
    }

    public getUserTopArtists(timeRange?: string, limit?: number, offset?: number): Observable<GetUsersTopArtistsAndTracks200Response> {
        return this.spotifyUserService.getUsersTopArtistsAndTracks("artists", timeRange, limit, offset);
    }

    public getUserTopTracks(timeRange?: string, limit?: number, offset?: number): Observable<GetUsersTopArtistsAndTracks200Response> {
        return this.spotifyUserService.getUsersTopArtistsAndTracks("tracks", timeRange, limit, offset);
    }
}