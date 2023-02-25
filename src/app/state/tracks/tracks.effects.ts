import { Injectable } from "@angular/core";
import { SpotifyService } from "../../services/spotify.service";
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { loadTracksFailure, loadTracksSuccess, loadTracks } from "./tracks.actions";
import { catchError, combineLatest, filter, from, map, mergeMap, of, switchMap, tap, withLatestFrom } from "rxjs";
import { Store } from "@ngrx/store";
import { tracksReducer } from "./tracks.reducer";
import { selectAllTracksShortTerm } from "./tracks.selector";
import { AppState } from "../app.state";

@Injectable()
export class TracksEffects {
    constructor(
        private actions$: Actions,
        private store$: Store<AppState>,
        private spotifyService: SpotifyService) { }

    loadTracks$ = createEffect(() =>
        this.actions$.pipe(
            ofType(loadTracks),
            withLatestFrom(this.store$),
            concatLatestFrom(([action, storeState]) => of(this.spotifyService.getOffsetTracks(action.timeRange, storeState))),
            mergeMap(([[action, storeState], offset]) => {
                if (action.amount - offset <= 0) {
                    //Implement logic for loading data from store.
                }
                return this.spotifyService.getUserTopTracks(action.timeRange, action.amount).pipe(
                    map((fetchedTracks) =>
                        loadTracksSuccess({ tracks: fetchedTracks, timeRange: action.timeRange })
                    ),
                    catchError((error) => of(loadTracksFailure({ error: error })))
                )
            }
            )
        )
    )
}



