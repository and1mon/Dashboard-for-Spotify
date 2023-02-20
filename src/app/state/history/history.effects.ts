import { Injectable } from "@angular/core";
import { SpotifyService } from "../../services/spotify.service";
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { catchError, filter, from, map, mergeMap, of, switchMap, withLatestFrom } from "rxjs";
import { Store } from "@ngrx/store";
import { AppState } from "../app.state";
import { loadHistorySuccess, loadHistoryFailure, loadHistory } from "./history.actions";

@Injectable()
export class HistoryEffects {
    constructor(
        private actions$: Actions,
        private store$: Store<AppState>,
        private spotifyService: SpotifyService) { }

    loadArtists$ = createEffect(() =>
        this.actions$.pipe(
            ofType(loadHistory),
            withLatestFrom(this.store$),
            //no filter here, so history is reloaded everytime the user navigates to a page including it, to make sure it is up to date
            mergeMap(([action, storeState]) => {
                return this.spotifyService.getPlaybackHistory(action.amount).pipe(
                    map((data) =>
                        loadHistorySuccess({ history: data })
                    ),
                    catchError((error) => of(loadHistoryFailure({ error: error })))
                )
            }
            )
        )
    )

}


