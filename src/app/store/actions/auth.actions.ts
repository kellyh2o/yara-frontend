import { createAction, props, union } from '@ngrx/store';

// API Events
export const requestRegistration = createAction(
  '[API Auth - Registration] Request Registration',
  props<{ username: string; password: string; email: string }>()
);

export const requestRegistrationSuccess = createAction(
  '[API Auth - Registration] Request Registration Success',
  props<{ token: string }>()
);

export const requestRegistrationFailure = createAction(
  '[API Auth - Registration] Request Registration Failure',
  props<{ error: any }>()
);

export const requestLogin = createAction(
  '[API Auth - Login] Request Login',
  props<{ username: string; password: string }>()
);

export const requestLoginSuccess = createAction(
  '[API Auth - Login] Request Login Success',
  props<{ token: string }>()
);

export const requestLoginFailure = createAction(
  '[API Auth - Login] Request Login Failure',
  props<{ error: any }>()
);

export const logout = createAction('[API - User] Logout User');

const all = union({
  requestRegistration,
  requestRegistrationSuccess,
  requestRegistrationFailure,
  requestLogin,
  requestLoginSuccess,
  requestLoginFailure,
  logout
});

export type AuthActionTypes = typeof all;
