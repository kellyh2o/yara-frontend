import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Store } from '@ngrx/store';
import { ReflectionResponse } from 'src/app/services/reflection-response.model';
import { ReflectionService } from 'src/app/services/reflections.service';
import { MOCK_STORE$ } from 'src/app/store/testing';
import {
  loadReflection,
  loadReflections,
  loadReflectionsFailure,
  loadReflectionsSuccess,
  loadReflectionFailure,
  loadReflectionSuccess,
  requestLogin,
  requestLoginSuccess,
  requestLoginFailure,
  requestRegistration,
  requestRegistrationSuccess,
  requestRegistrationFailure,
} from '../actions';
import { AUTH_INITIAL_MOCK_STATE, MOCK_AUTH_RESPONSE } from '../state/auth-initial-mock-state';
import { ReflectionEffects } from './reflection.effects';
import { cold, hot } from 'jasmine-marbles';
import { Observable, of } from 'rxjs';
import { AuthResponse } from 'src/app/services/user-response.model';
import { AuthService } from 'src/app/services/auth.service';
import { AuthEffects } from './auth.effects';
import { RouterTestingModule } from '@angular/router/testing';

const mockAuthService = {
  login: () => of(MOCK_AUTH_RESPONSE),
  register: () => of(MOCK_AUTH_RESPONSE),
};

const mockAuthResponse: AuthResponse = {
    user: {
        _id: 'testId',
        username: 'testUsername',
        password: 'testPassword',
        tokens: [ { _id: 'testId', token: 'testToken' } ]
    },
    token: 'testToken'
};

describe('AuthEffects', () => {
  let actions$: Observable<any>;
  let authService: AuthService;
  let effects: AuthEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [RouterTestingModule],
        providers: [
            AuthEffects,
            provideMockActions(() => actions$),
            { provide: Store, useValue: MOCK_STORE$ },
            { provide: AuthService, useValue: mockAuthService },
        ],
    });
    effects = TestBed.inject(AuthEffects);
    authService = TestBed.inject(AuthService);
  });

  describe('login$', () => {
    it('should successfully login', () => {
      spyOn(authService, 'login').and.returnValue(of(mockAuthResponse));
      actions$ = hot('a', {
        a: requestLogin({ username: 'testUsername', password: 'testPassword' }),
      });

      const expected$ = cold('b', {
        b: requestLoginSuccess({ token: 'testToken' }),
      });

      expect(effects.login$).toBeObservable(expected$);
    });

    it('should fail to login', () => {
      const errMsg = 'I tried...';
      const error$ = cold('#', {}, errMsg);

      spyOn(authService, 'login').and.returnValue(error$);
      actions$ = hot('a', {
        a: requestLogin({ username: 'testUsername', password: 'testPassword' }),
      });

      const expected$ = cold('b', {
        b: requestLoginFailure({ error: errMsg }),
      });

      expect(effects.login$).toBeObservable(expected$);
    });
  });

  describe('register$', () => {
    it('should successfully register a user', () => {
      spyOn(authService, 'register').and.returnValue(of(mockAuthResponse));
      actions$ = hot('a', {
        a: requestRegistration({ email: 'testemail@gmail.com', username: 'testUsername', password: 'testPassword' }),
      });

      const expected$ = cold('b', {
        b: requestRegistrationSuccess({ token: 'testToken' }),
      });

      expect(effects.register$).toBeObservable(expected$);
    });

    it('should fail to register a user', () => {
      const errMsg = 'I tried...';
      const error$ = cold('#', {}, errMsg);

      spyOn(authService, 'register').and.returnValue(error$);
      actions$ = hot('a', {
        a: requestRegistration({email: 'testemail@gmail.com', username: 'testUsername', password: 'testPassword' }),
      });

      const expected$ = cold('b', {
        b: requestRegistrationFailure({ error: errMsg }),
      });

      expect(effects.register$).toBeObservable(expected$);
    });
  });
});
