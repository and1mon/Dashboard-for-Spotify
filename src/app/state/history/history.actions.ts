import { createAction, props } from '@ngrx/store';
import { PlayHistoryObject } from 'src/libs/openapi';

export const loadHistory = createAction(
    "[History Page] Load History",
    props<{ amount: number }>()
);

export const loadHistorySuccess = createAction(
    "[History Page] History Load Success",
    props<{ history: PlayHistoryObject[] }>()
);

export const loadHistoryFailure = createAction(
    "[History Page] History Load Failure",
    props<{ error: string }>()
);
