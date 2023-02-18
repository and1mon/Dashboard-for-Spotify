import { createSelector, createFeatureSelector } from '@ngrx/store';
import { ArtistObject } from 'src/libs/openapi';
import { AppState } from '../app.state';
import { ArtistsState } from './artists.reducer';

export const selectArtists = (state: AppState) => state.artists;
export const selectAllArtistsShortTerm = (amount: number) => createSelector(
    selectArtists,
    (state: ArtistsState) => state.artistsShortTerm.slice(0, amount),
);

export const selectAllArtistsMediumTerm = (amount: number) => createSelector(
    selectArtists,
    (state: ArtistsState) => state.artistsMediumTerm.slice(0, amount),
);

export const selectAllArtistsLongTerm = (amount: number) => createSelector(
    selectArtists,
    (state: ArtistsState) => state.artistsLongTerm.slice(0, amount),
);

