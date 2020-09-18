import { ActionReducerMap } from '@ngrx/store';
import { ApplicationState } from '../state/application-state.model';
import { authReducer } from './auth.reducer';
import {reflectionReducer } from './reflection.reducer';

export const appState: ActionReducerMap<ApplicationState> = {
  authState: authReducer,
  reflectionState: reflectionReducer
};
