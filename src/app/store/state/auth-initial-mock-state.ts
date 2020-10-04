import { AuthState } from '../models/auth-state.model';
import { AuthResponse } from 'src/app/services/user-response.model';

export const AUTH_INITIAL_MOCK_STATE: AuthState = {
  isAuth: false,
  loading: false,
  isTokenExpired: false
};

export const MOCK_AUTH_RESPONSE : AuthResponse = {
  user: {
    _id: 'testId',
    username: 'testUsername',
    password: 'testPassword',
    tokens: [ { _id: 'testId', token: 'testToken' } ]
},
token: 'testToken'
}