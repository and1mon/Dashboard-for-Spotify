import { createSelector, createFeatureSelector } from '@ngrx/store';
import { TrackObject } from 'src/libs/openapi';
import { AppState } from '../app.state';
import { TracksState } from './tracks.reducer';

export const selectTracks = (state: AppState) => state.tracks;
export const selectAllTracks = createSelector(
    selectTracks,
    (state: TracksState) => state.tracks
);

