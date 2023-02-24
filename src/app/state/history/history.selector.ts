import { createSelector, createFeatureSelector } from '@ngrx/store';
import { ArtistObject } from 'src/libs/openapi';
import { AppState } from '../app.state';
import { HistoryState } from './history.reducer';

export const selectHistory = (state: AppState) => state.history;
export const selectAllHistoryEntries = (amount: number) => createSelector(
    selectHistory,
    (state: HistoryState) => state.history.slice(0, amount),
);

export const selectHistoryLoadingState = () => createSelector(
    selectHistory,
    (state: HistoryState) => state.status,
);
