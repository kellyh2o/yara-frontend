import { UserFacade } from './user.facade';
import { MOCK_STORE$ } from '../testing';
import { logout } from '..';
import { requestLogin, requestRegistration } from '../actions';

describe('UserFacade', () => {
  let userFacade: UserFacade;

  beforeEach(() => {
    userFacade = new UserFacade(MOCK_STORE$);
  });

  describe('#logout method', () => {
    it('should logout', () => {
      const dispatchSpy = spyOn(MOCK_STORE$, 'dispatch');
      const action = logout();
      userFacade.logout();
      expect(dispatchSpy).toHaveBeenCalledWith(action);
    });

    it('should login', () => {
      const dispatchSpy = spyOn(MOCK_STORE$, 'dispatch');
      const action = requestLogin({ username: "testUsername", password: "testPassword"});
      userFacade.login("testUsername", "testPassword");
      expect(dispatchSpy).toHaveBeenCalledWith(action);
    });
    
    it('should register', () => {
      const dispatchSpy = spyOn(MOCK_STORE$, 'dispatch');
      const action = requestRegistration({ email: "testEmail", username: "testUsername", password: "testPassword"});
      userFacade.register("testEmail", "testUsername", "testPassword");
      expect(dispatchSpy).toHaveBeenCalledWith(action);
    });
  });
});
