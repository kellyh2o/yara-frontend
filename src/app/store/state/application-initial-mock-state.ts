import { ApplicationState } from '../models/application-state.model';
import { AUTH_INITIAL_MOCK_STATE } from './auth-initial-mock-state';
import { REFLECTION_INITIAL_MOCK_STATE } from './reflection-initial-mock-state';
import { USER_INITIAL_MOCK_STATE } from './user-initial-mock-state';

export const APP_INTIAL_MOCK_STATE: ApplicationState = {
  authState: AUTH_INITIAL_MOCK_STATE,
  reflectionState: REFLECTION_INITIAL_MOCK_STATE,
  userState: USER_INITIAL_MOCK_STATE
};
