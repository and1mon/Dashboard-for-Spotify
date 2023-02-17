import { createReducer, on } from '@ngrx/store';
import { TrackObject } from 'src/libs/openapi';
import { loadTracks, loadTracksFailure, loadTracksSuccess } from './tracks.actions';

export interface TracksState {
    tracks: TrackObject[],
    error: string | null,
    status: "pending" | "loading" | "error" | "success"
}

export const initialState: TracksState = {
    tracks: [],
    error: null,
    status: "pending"
};

export const tracksReducer = createReducer(
    initialState,
    on(loadTracks, (state) => ({ ...state, status: "loading" })),

    on(loadTracksSuccess, (state, { tracks }) => ({
        ...state,
        tracks: tracks,
        error: null,
        status: "success"
    })),

    on(loadTracksFailure, (state, { error }) => ({
        ...state,
        error: error,
        status: "error"
    })),
);