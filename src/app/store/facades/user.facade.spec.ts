import { UserFacade } from './user.facade';
import { MOCK_STORE$ } from '../testing';
import { logout } from '..';

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
  });
});
