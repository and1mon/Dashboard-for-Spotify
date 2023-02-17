import { Injectable } from "@angular/core";
import { SpotifyService } from "../../services/spotify.service";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { loadArtists, loadArtistsFailure, loadArtistsSuccess } from "./artists.actions";
import { catchError, from, map, mergeMap, of, switchMap } from "rxjs";
import { Store } from "@ngrx/store";

@Injectable()
export class ArtistsEffects {
    constructor(
        private actions$: Actions,
        private spotifyService: SpotifyService) { }

    loadArtists$ = createEffect(() =>
        this.actions$.pipe(
            ofType(loadArtists),
            mergeMap((action) =>
                this.spotifyService.getUserTopArtists("short_term", 10).pipe(
                    map((data) =>
                        loadArtistsSuccess({ artists: data })
                    ),
                    catchError((error) => of(loadArtistsFailure({ error: error })))
                )
            )
        )
    )

}


