import { AuthState } from './auth-state.model';
import { ReflectionState } from './reflection-state.model';

export interface ApplicationState {
  readonly authState: AuthState;
  readonly reflectionState: ReflectionState;
}
