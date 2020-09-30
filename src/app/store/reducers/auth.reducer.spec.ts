import { AuthState } from '../models/auth-state.model';
import { requestLogin, requestLoginSuccess, requestLoginFailure, requestRegistration, requestRegistrationSuccess, requestRegistrationFailure } from '../actions/auth.actions';
import { AUTH_INITIAL_MOCK_STATE } from '../state/auth-initial-mock-state';
import { authReducer } from './auth.reducer';

describe('Auth Reducer', () => {
  it('should set the loading key to true on `requestLogin`', () => {
    const action = requestLogin({ username: "admin", password: "password" });
    const expected: AuthState = {
      ...AUTH_INITIAL_MOCK_STATE,
      loading: true
    };
    const actual = authReducer(AUTH_INITIAL_MOCK_STATE, action);

    expect(actual).toEqual(expected);
  });

  it('should set the token key on `requestLoginSuccess`', () => {
    const testToken = "testToken"
    const action = requestLoginSuccess({ token: testToken });
    const expected: AuthState = {
      ...AUTH_INITIAL_MOCK_STATE,
      isAuth: true,
      loading: false
    };
    const actual = authReducer(AUTH_INITIAL_MOCK_STATE, action);

    expect(actual).toEqual(expected);
  });

  it('should set the isAuth key to true on `requestLoginSuccess`', () => {
    const testToken = "testToken"
    const action = requestLoginSuccess({ token: testToken });
    const expected: AuthState = {
      ...AUTH_INITIAL_MOCK_STATE,
      isAuth: true,
      loading: false
    };
    const actual = authReducer(AUTH_INITIAL_MOCK_STATE, action);

    expect(actual).toEqual(expected);
  });

  it('should set the loading key to false on `requestLoginSuccess`', () => {
    const testToken = "testToken"
    const action = requestLoginSuccess({ token: testToken });
    const expected: AuthState = {
      ...AUTH_INITIAL_MOCK_STATE,
      isAuth: true,
      loading: false
    };
    const actual = authReducer(AUTH_INITIAL_MOCK_STATE, action);

    expect(actual).toEqual(expected);
  });

  it('should set the isAuth key to false on `requestLoginFailure`', () => {
    const action = requestLoginFailure({ error: "error" });
    const expected: AuthState = {
      ...AUTH_INITIAL_MOCK_STATE,
      isAuth: false,
      loading: false
    };
    const actual = authReducer(AUTH_INITIAL_MOCK_STATE, action);

    expect(actual).toEqual(expected);
  });

  it('should set the loading key to false on `requestLoginFailure`', () => {
    const action = requestLoginFailure({ error: "error" });
    const expected: AuthState = {
      ...AUTH_INITIAL_MOCK_STATE,
      isAuth: false,
      loading: false
    };
    const actual = authReducer(AUTH_INITIAL_MOCK_STATE, action);

    expect(actual).toEqual(expected);
  });

  
  it('should set the loading key to true on `requestRegistration`', () => {
    const action = requestRegistration({ username: "admin", password: "password", email: "test@gmail.com" });
    const expected: AuthState = {
      ...AUTH_INITIAL_MOCK_STATE,
      loading: true
    };
    const actual = authReducer(AUTH_INITIAL_MOCK_STATE, action);

    expect(actual).toEqual(expected);
  });

  it('should set the token key on `requestRegistrationSuccess`', () => {
    const testToken = "testToken"
    const action = requestRegistrationSuccess({ token: testToken });
    const expected: AuthState = {
      ...AUTH_INITIAL_MOCK_STATE,
      isAuth: true,
      loading: false
    };
    const actual = authReducer(AUTH_INITIAL_MOCK_STATE, action);

    expect(actual).toEqual(expected);
  });

  it('should set the isAuth key to true on `requestRegistrationSuccess`', () => {
    const testToken = "testToken"
    const action = requestRegistrationSuccess({ token: testToken });
    const expected: AuthState = {
      ...AUTH_INITIAL_MOCK_STATE,
      isAuth: true,
      loading: false
    };
    const actual = authReducer(AUTH_INITIAL_MOCK_STATE, action);

    expect(actual).toEqual(expected);
  });

  it('should set the loading key to false on `requestRegistrationSuccess`', () => {
    const testToken = "testToken"
    const action = requestRegistrationSuccess({ token: testToken });
    const expected: AuthState = {
      ...AUTH_INITIAL_MOCK_STATE,
      isAuth: true,
      loading: false
    };
    const actual = authReducer(AUTH_INITIAL_MOCK_STATE, action);

    expect(actual).toEqual(expected);
  });

  it('should set the isAuth key to false on `requestRegistrationFailure`', () => {
    const action = requestRegistrationFailure({ error: "error" });
    const expected: AuthState = {
      ...AUTH_INITIAL_MOCK_STATE,
      isAuth: false,
      loading: false
    };
    const actual = authReducer(AUTH_INITIAL_MOCK_STATE, action);

    expect(actual).toEqual(expected);
  });

  it('should set the loading key to false on `requestRegistrationFailure`', () => {
    const action = requestRegistrationFailure({ error: "error" });
    const expected: AuthState = {
      ...AUTH_INITIAL_MOCK_STATE,
      isAuth: false,
      loading: false
    };
    const actual = authReducer(AUTH_INITIAL_MOCK_STATE, action);

    expect(actual).toEqual(expected);
  });
});
