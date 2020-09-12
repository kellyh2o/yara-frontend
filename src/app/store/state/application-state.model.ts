import { AuthState } from './auth-state.model';
import { JournalState } from './journal-state.model';

export interface ApplicationState {
  readonly authState: AuthState;
  readonly journalState: JournalState;
}
