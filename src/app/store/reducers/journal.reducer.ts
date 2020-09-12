import { createReducer, on, Action } from '@ngrx/store';
import { createNewEntry, saveNewEntry, cancelNewEntry } from '../actions/journal.actions';
import { JournalState } from '../state/journal-state.model';

export const initialState: JournalState = {
  showEntries: true,
};

const reducer = createReducer(
  initialState,
  on(createNewEntry, (state) => ({ ...state, showEntries: false }))
);

export function journalReducer(state: JournalState | undefined, action: Action) {
  return reducer(state, action);
}