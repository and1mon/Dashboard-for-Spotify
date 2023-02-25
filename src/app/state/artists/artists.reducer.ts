import { createReducer, on } from '@ngrx/store';
import { ArtistObject } from 'src/libs/openapi';
import { loadArtists, loadArtistsFailure, loadArtistsSuccess } from './artists.actions';

export interface ArtistsState {
    artistsShortTerm: ArtistObject[],
    artistsMediumTerm: ArtistObject[],
    artistsLongTerm: ArtistObject[],
    error: string | null,
    status: "pending" | "loading" | "error" | "success"
}

export const initialState: ArtistsState = {
    artistsShortTerm: [],
    artistsMediumTerm: [],
    artistsLongTerm: [],
    error: null,
    status: "pending"
};

export const artistsReducer = createReducer(
    initialState,
    on(loadArtists, (state) => ({ ...state, status: "loading" })),


    on(loadArtistsSuccess, (state, { artists, timeRange }) => {

        let newState: ArtistsState = {
            ...state,
            error: null,
            status: "success"
        }

        switch (timeRange) {
            case "short_term":
                newState = {
                    ...newState,
                    artistsShortTerm: artists,
                }
                break;
            case "medium_term":
                newState = {
                    ...newState,
                    artistsMediumTerm: artists,
                }
                break;
            case "long_term":
                newState = {
                    ...newState,
                    artistsLongTerm: artists,
                }
                break;
        }

        return newState;
    }),

    on(loadArtistsFailure, (state, { error }) => ({
        ...state,
        error: error,
        status: "error"
    })),
);