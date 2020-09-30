import { ApplicationState } from '../models/application-state.model';
import { AUTH_INITIAL_MOCK_STATE } from './auth-initial-mock-state';
import { REFLECTION_INITIAL_MOCK_STATE } from './reflection-initial-mock-state';
import { REFLECTIONS_INITIAL_MOCK_STATE } from './reflections-initial-mock-state';
import { USER_INITIAL_MOCK_STATE } from './user-initial-mock-state';

export const APP_INITIAL_MOCK_STATE: ApplicationState = {
  router: null,
  authState: AUTH_INITIAL_MOCK_STATE,
  userState: USER_INITIAL_MOCK_STATE,
  reflectionsState: REFLECTIONS_INITIAL_MOCK_STATE,
  selectedReflection: REFLECTION_INITIAL_MOCK_STATE
};
