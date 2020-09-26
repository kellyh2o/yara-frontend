import { ApplicationState } from '../models/application-state.model';
import { AUTH_INITIAL_STATE } from './auth-initial-state';
import { REFLECTION_INITIAL_STATE } from './reflection-initial-state';
import { REFLECTIONS_INITIAL_STATE } from './reflections-initial-state';
import { USER_INITIAL_STATE } from './user-initial-state';

export const APP_INITIAL_STATE: ApplicationState = {
  router: null,
  authState: AUTH_INITIAL_STATE,
  userState: USER_INITIAL_STATE,
  reflectionsState: REFLECTIONS_INITIAL_STATE,
  selectedReflection: REFLECTION_INITIAL_STATE
};