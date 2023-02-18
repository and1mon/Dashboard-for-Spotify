import { Injectable } from "@angular/core";
import { SpotifyService } from "../../services/spotify.service";
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { loadArtists, loadArtistsFailure, loadArtistsSuccess } from "./artists.actions";
import { catchError, filter, from, map, mergeMap, of, switchMap, withLatestFrom } from "rxjs";
import { Store } from "@ngrx/store";
import { AppState } from "../app.state";

@Injectable()
export class ArtistsEffects {
    constructor(
        private actions$: Actions,
        private store$: Store<AppState>,
        private spotifyService: SpotifyService) { }

    loadArtists$ = createEffect(() =>
        this.actions$.pipe(
            ofType(loadArtists),
            withLatestFrom(this.store$),
            concatLatestFrom(([action, storeState]) => of(this.spotifyService.getOffset(action.timeRange, storeState))),
            filter(([[action, storeState], offset]) => {
                return action.amount - storeState.artists.artistsShortTerm.length > 0;
            }),
            mergeMap(([[action, storeState], offset]) => {
                return this.spotifyService.getUserTopArtists(action.timeRange, action.amount).pipe(
                    map((data) =>
                        loadArtistsSuccess({ artists: data, timeRange: action.timeRange })
                    ),
                    catchError((error) => of(loadArtistsFailure({ error: error })))
                )
            }
            )
        )
    )

}


