import { ActionReducerMap } from '@ngrx/store';
import { ApplicationState } from '../models/application-state.model';
import { authReducer } from './auth.reducer';
import { userReducer } from './user.reducer';
import { routerReducer } from '@ngrx/router-store';
import { reflectionsReducer, reflectionReducer } from '../../reflections/store/reducers';

export const appState: ActionReducerMap<ApplicationState> = {
  router: routerReducer,
  authState: authReducer,
  userState: userReducer,
  reflectionsState: reflectionsReducer,
  selectedReflection: reflectionReducer
};
