import { createAction, props } from '@ngrx/store';
import { ArtistObject } from 'src/libs/openapi';

export const loadArtists = createAction(
    "[Artists Page] Load Artists Short-Term",
    props<{ amount: number, timeRange: "short_term" | "medium_term" | "long_term" }>()
);

export const loadArtistsSuccess = createAction(
    "[Artists Page] Artists Load Short-Term Success",
    props<{ artists: ArtistObject[], timeRange: "short_term" | "medium_term" | "long_term" }>()
);

export const loadArtistsFailure = createAction(
    "[Artists Page] Artists Load Failure",
    props<{ error: string }>()
);
