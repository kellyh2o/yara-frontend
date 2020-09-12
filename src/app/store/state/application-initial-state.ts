import { ApplicationState } from './application-state.model';
import { AUTH_INITIAL_STATE } from './auth-initial-state';
import { JOURNAL_INITIAL_STATE } from './journal-initial-state';

export const APP_INTIAL_STATE: ApplicationState = {
  authState: AUTH_INITIAL_STATE,
  journalState: JOURNAL_INITIAL_STATE
};
