import { UserState } from '../models/user-state.model';
import { USER_INITIAL_MOCK_STATE } from '../state/user-initial-mock-state';
import { loadMe, loadMeSucess, loadMeFailure } from '../actions';
import { userReducer } from './user.reducer';
import { User } from 'src/app/models/user.model';

describe('User Reducer', () => {
  it('should set the user key to current user on `loadMe`', () => {
    const action = loadMe();
    const expected: UserState = {
      ...USER_INITIAL_MOCK_STATE,
      user: USER_INITIAL_MOCK_STATE.user,
      loading: true,
    };
    const actual = userReducer(USER_INITIAL_MOCK_STATE, action);

    expect(actual).toEqual(expected);
  });

  it('should set the loading key to true on `loadMe`', () => {
    const action = loadMe();
    const expected: UserState = {
      ...USER_INITIAL_MOCK_STATE,
      user: USER_INITIAL_MOCK_STATE.user,
      loading: true,
    };
    const actual = userReducer(USER_INITIAL_MOCK_STATE, action);

    expect(actual).toEqual(expected);
  });

  it('should set the users key on `loadMeSuccess`', () => {
    const user = 
    {
      email: "test@gmail.com",
      _id: "testId",
      username: "test",
      password: "password",
      tokens: []
    } as User;
    
    const action = loadMeSucess( { user: user });
    
    const expected: UserState = {
      ...USER_INITIAL_MOCK_STATE,
      user: user,
      loading: false,
    };
    const actual = userReducer(USER_INITIAL_MOCK_STATE, action);

    expect(actual).toEqual(expected);
  });

  it('should set the loading key to false on `loadMeSuccess`', () => {
    const user = 
      {
        email: "test@gmail.com",
        _id: "testId",
        username: "test",
        password: "password",
        tokens: []
      } as User;

    const action = loadMeSucess( 
      { 
        user: user
      }
    );

    const expected: UserState = {
      ...USER_INITIAL_MOCK_STATE,
      user: user,
      loading: false,
    };
    const actual = userReducer(USER_INITIAL_MOCK_STATE, action);

    expect(actual).toEqual(expected);
  });

  it('should set the loading key to false on `loadMeFailure`', () => {
    const action = loadMeFailure({ error: ""});
    const expected: UserState = {
      ...USER_INITIAL_MOCK_STATE,
      user: USER_INITIAL_MOCK_STATE.user,
      loading: false,
    };
    const actual = userReducer(USER_INITIAL_MOCK_STATE, action);

    expect(actual).toEqual(expected);
  });
});
