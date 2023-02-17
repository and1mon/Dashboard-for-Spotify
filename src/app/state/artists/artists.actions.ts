import { createAction, props } from '@ngrx/store';
import { ArtistObject } from 'src/libs/openapi';

export const loadArtists = createAction("[Artists Page] Load Artists");

export const loadArtistsSuccess = createAction(
    "[Artists Page] Artists Load Success",
    props<{ artists: ArtistObject[] }>()
);

export const loadArtistsFailure = createAction(
    "[Artists Page] Artists Load Failure",
    props<{ error: string }>()
);
