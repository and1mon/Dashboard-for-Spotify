import { Injectable } from "@angular/core";
import { SpotifyService } from "../../services/spotify.service";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { loadTracks, loadTracksFailure, loadTracksSuccess } from "./tracks.actions";
import { catchError, filter, from, map, mergeMap, of, switchMap, withLatestFrom } from "rxjs";
import { Store } from "@ngrx/store";
import { tracksReducer } from "./tracks.reducer";
import { selectAllTracks } from "./tracks.selector";
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
            filter(([action, storeState]) => 10 - storeState.tracks.tracks.length > 0),
            mergeMap(() =>
                this.spotifyService.getUserTopTracks("short_term", 10).pipe(
                    map((fetchedTracks) =>
                        loadTracksSuccess({ tracks: fetchedTracks })
                    ),
                    catchError((error) => of(loadTracksFailure({ error: error })))
                )
            )
        )
    )


}


