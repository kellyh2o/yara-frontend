import { createSelector } from '@ngrx/store';
import { ApplicationState } from '../state/application-state.model';
import { JournalState } from '../state/journal-state.model';

export const journalState = ({ journalState }: ApplicationState) => journalState;
export const getShowEntries = createSelector(
  journalState,
  ({ showEntries }: JournalState) => showEntries
);
export const getShowNewEntryForm = createSelector(
  journalState,
  ({ showEntries }: JournalState) => !showEntries
);