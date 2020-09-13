import { AuthState } from '../state/auth-state.model';
import { login } from '../actions/auth.actions';
import { AUTH_INITIAL_MOCK_STATE } from '../state/auth-initial-mock-state';
import { authReducer } from './auth.reducer';

describe('Auth Reducer', () => {
  it('should set the isAuth key to true on `login`', () => {
    const action = login();
    const expected: AuthState = {
      ...AUTH_INITIAL_MOCK_STATE,
      isAuth: true,
    };
    const actual = authReducer(AUTH_INITIAL_MOCK_STATE, action);

    expect(actual).toEqual(expected);
  });
});
