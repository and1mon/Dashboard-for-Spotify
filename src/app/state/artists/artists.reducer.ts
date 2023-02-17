import { createReducer, on } from '@ngrx/store';
import { ArtistObject } from 'src/libs/openapi';
import { loadArtists, loadArtistsFailure, loadArtistsSuccess } from './artists.actions';

export interface ArtistsState {
    artists: ArtistObject[],
    error: string | null,
    status: "pending" | "loading" | "error" | "success"
}

export const initialState: ArtistsState = {
    artists: [],
    error: null,
    status: "pending"
};

export const artistsReducer = createReducer(
    initialState,
    on(loadArtists, (state) => ({ ...state, status: "loading" })),

    on(loadArtistsSuccess, (state, { artists }) => ({
        ...state,
        artists: artists,
        error: null,
        status: "success"
    })),

    on(loadArtistsFailure, (state, { error }) => ({
        ...state,
        error: error,
        status: "error"
    })),
);