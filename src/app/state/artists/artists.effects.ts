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
            concatLatestFrom(([action, storeState]) => of(this.spotifyService.getOffsetArtists(action.timeRange, storeState))),
            filter(([[action, storeState], offset]) => {
                return action.amount - offset > 0;
            }),
            mergeMap(([[action, storeState], offset]) => {
                return this.spotifyService.getUserTopArtists(action.timeRange, action.amount - offset, offset).pipe(
                    map((fetchedArtists) =>
                        loadArtistsSuccess({ artists: fetchedArtists, timeRange: action.timeRange })
                    ),
                    catchError((error) => of(loadArtistsFailure({ error: error })))
                )
            }
            )
        )
    )

}


