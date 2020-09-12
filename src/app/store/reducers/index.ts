import { ActionReducerMap } from '@ngrx/store';
import { ApplicationState } from '../state/application-state.model';
import { authReducer } from './auth.reducer';
import { journalReducer } from './journal.reducer';

export const appState: ActionReducerMap<ApplicationState> = {
  authState: authReducer,
  journalState: journalReducer
};
