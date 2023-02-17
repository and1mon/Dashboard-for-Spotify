import { createAction, props } from '@ngrx/store';
import { TrackObject } from 'src/libs/openapi';

export const loadTracks = createAction("[Tracks Page] Load Tracks");

export const loadTracksSuccess = createAction(
    "[Tracks Page] Tracks Load Success",
    props<{ tracks: TrackObject[] }>()
);

export const loadTracksFailure = createAction(
    "[Tracks Page] Tracks Load Failure",
    props<{ error: string }>()
);
