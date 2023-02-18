import { createReducer, on } from '@ngrx/store';
import { TrackObject } from 'src/libs/openapi';
import { loadTracksFailure, loadTracksSuccess, loadTracks } from './tracks.actions';

export interface TracksState {
    tracksShortTerm: TrackObject[],
    tracksMediumTerm: TrackObject[],
    tracksLongTerm: TrackObject[],
    error: string | null,
    status: "pending" | "loading" | "error" | "success"
}

export const initialState: TracksState = {
    tracksShortTerm: [],
    tracksMediumTerm: [],
    tracksLongTerm: [],
    error: null,
    status: "pending"
};

export const tracksReducer = createReducer(
    initialState,
    on(loadTracks, (state) => ({ ...state, status: "loading" })),

    on(loadTracksSuccess, (state, { tracks, timeRange }) => {
        let newState: TracksState = {
            ...state,
            error: null,
            status: "success"
        }

        switch (timeRange) {
            case "short_term":
                newState = {
                    ...newState,
                    tracksShortTerm: [...state.tracksShortTerm, ...tracks],
                }
                break;
            case "medium_term":
                newState = {
                    ...newState,
                    tracksMediumTerm: [...state.tracksMediumTerm, ...tracks],
                }
                break;
            case "long_term":
                newState = {
                    ...newState,
                    tracksLongTerm: [...state.tracksLongTerm, ...tracks],
                }
                break;
        }

        return newState;
    }),

    on(loadTracksFailure, (state, { error }) => ({
        ...state,
        error: error,
        status: "error"
    })),
);