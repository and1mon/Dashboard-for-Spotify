import { createReducer, on } from '@ngrx/store';
import { ArtistObject, PlayHistoryObject } from 'src/libs/openapi';
import { loadHistory, loadHistoryFailure, loadHistorySuccess } from './history.actions';

export interface HistoryState {
    history: PlayHistoryObject[],
    error: string | null,
    status: "pending" | "loading" | "error" | "success"
}

export const initialState: HistoryState = {
    history: [],
    error: null,
    status: "pending"
};

export const historyReducer = createReducer(
    initialState,
    on(loadHistory, (state) => ({ ...state, status: "loading" })),


    on(loadHistorySuccess, (state, { history }) => ({
        ...state,
        history: history,
        status: 'success'
    })),

    on(loadHistoryFailure, (state, { error }) => ({
        ...state,
        error: error,
        status: "error"
    })),
);