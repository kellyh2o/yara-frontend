import { RouterReducerState } from '@ngrx/router-store';
import { AuthState } from './auth-state.model';
import { UserState } from './user-state.model';
import { RouterStateUrl } from './router.models';
import { ReflectionsState } from '../../reflections/store/reflections-state.model';
import { ReflectionState } from '../../reflections/store/reflection-state.model';


export interface ApplicationState {
  readonly router: RouterReducerState<RouterStateUrl>;
  readonly authState: AuthState;
  readonly userState: UserState;
  readonly reflectionsState: ReflectionsState;
  readonly selectedReflection: ReflectionState;
}
