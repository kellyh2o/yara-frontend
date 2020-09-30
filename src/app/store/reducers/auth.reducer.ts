import { createReducer, on, Action } from '@ngrx/store';
import {
  requestLogin,
  requestLoginFailure,
  requestLoginSuccess,
  requestRegistration,
  requestRegistrationFailure,
  requestRegistrationSuccess,
} from '../actions/auth.actions';
import { AuthState } from '../../models/auth-state.model';

export const initialState: AuthState = {
  isAuth: false,
  token: null,
  isTokenExpired: false,
  loading: false,
};

const reducer = createReducer(
  initialState,
  on(requestRegistration, (state) => ({ ...state, loading: true })),
  on(requestRegistrationSuccess, (state) => ({
    ...state,
    isAuth: true,
    loading: false
  })),
  on(requestRegistrationFailure, (state) => ({
    ...state,
    isAuth: false,
    loading: false,
  })),
  on(requestLogin, (state) => ({ ...state, loading: true })),
  on(requestLoginSuccess, (state) => ({
    ...state,
    isAuth: true,
    loading: false,
  })),
  on(requestLoginFailure, (state) => ({
    ...state,
    isAuth: false,
    loading: false,
  }))
);

export function authReducer(state: AuthState | undefined, action: Action) {
  return reducer(state, action);
}
