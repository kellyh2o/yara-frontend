import { createSelector } from '@ngrx/store';
import { ApplicationState } from '../state/application-state.model';
import { AuthState } from '../state/auth-state.model';

export const authState = ({ authState }: ApplicationState) => authState;
export const getIsAuth = createSelector(
  authState,
  ({ isAuth }: AuthState) => isAuth
);
