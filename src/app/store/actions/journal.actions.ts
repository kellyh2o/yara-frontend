import { createAction, union } from '@ngrx/store';

export const createNewEntry = createAction('[Journal] Create New Entry');
export const saveNewEntry = createAction('[Journal] Save New Entry');
export const cancelNewEntry = createAction('[Journal] Cancel New Entry');

const all = union({
    createNewEntry,
    saveNewEntry,
    cancelNewEntry
});

export type JournalActionsTypes = typeof all;
