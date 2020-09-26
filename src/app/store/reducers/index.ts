import { ActionReducerMap } from '@ngrx/store';
import { ApplicationState } from '../models/application-state.model';
import { authReducer } from './auth.reducer';
import { reflectionReducer } from './reflection.reducer';
import { reflectionsReducer } from './reflections.reducer';
import { userReducer } from './user.reducer';
import { routerReducer } from '@ngrx/router-store';

export const appState: ActionReducerMap<ApplicationState> = {
  router: routerReducer,
  authState: authReducer,
  userState: userReducer,
  reflectionsState: reflectionsReducer,
  selectedReflection: reflectionReducer
};
