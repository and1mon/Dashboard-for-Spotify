import { createSelector, createFeatureSelector } from '@ngrx/store';
import { TrackObject } from 'src/libs/openapi';
import { AppState } from '../app.state';
import { TracksState } from './tracks.reducer';

export const selectTracks = (state: AppState) => state.tracks;
export const selectAllTracksShortTerm = (amount: number) => createSelector(
    selectTracks,
    (state: TracksState) => state.tracksShortTerm.slice(0, amount),
);

export const selectAllTracksMediumTerm = (amount: number) => createSelector(
    selectTracks,
    (state: TracksState) => state.tracksMediumTerm.slice(0, amount),
);

export const selectAllTracksLongTerm = (amount: number) => createSelector(
    selectTracks,
    (state: TracksState) => state.tracksLongTerm.slice(0, amount),
);

export const selectTracksLoadingState = () => createSelector(
    selectTracks,
    (state: TracksState) => state.status,
);

