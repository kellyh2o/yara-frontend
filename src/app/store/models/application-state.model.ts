import { RouterReducerState } from '@ngrx/router-store';
import { AuthState } from './auth-state.model';
import { UserState } from './user-state.model';
import { ReflectionState } from './reflection-state.model';
import { ReflectionsState } from './reflections-state.model';
import { RouterStateUrl } from './router.models';


export interface ApplicationState {
  readonly router: RouterReducerState<RouterStateUrl>;
  readonly authState: AuthState;
  readonly userState: UserState;
  readonly reflectionsState: ReflectionsState;
  readonly selectedReflection: ReflectionState;
}
