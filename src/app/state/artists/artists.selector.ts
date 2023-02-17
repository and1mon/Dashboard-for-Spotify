import { createSelector, createFeatureSelector } from '@ngrx/store';
import { ArtistObject } from 'src/libs/openapi';
import { AppState } from '../app.state';
import { ArtistsState } from './artists.reducer';

export const selectArtists = (state: AppState) => state.artists;
export const selectAllArtists = createSelector(
    selectArtists,
    (state: ArtistsState) => state.artists
);

