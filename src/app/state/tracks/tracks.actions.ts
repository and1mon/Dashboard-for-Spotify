import { createAction, props } from '@ngrx/store';
import { TrackObject } from 'src/libs/openapi';

export const loadTracks = createAction(
    "[Tracks Page] Load Tracks",
    props<{ amount: number, timeRange: "short_term" | "medium_term" | "long_term" }>()

);

export const loadTracksSuccess = createAction(
    "[Tracks Page] Tracks Load Success",
    props<{ tracks: TrackObject[], timeRange: "short_term" | "medium_term" | "long_term" }>()
);

export const loadTracksFailure = createAction(
    "[Tracks Page] Tracks Load Failure",
    props<{ error: string }>()
);
