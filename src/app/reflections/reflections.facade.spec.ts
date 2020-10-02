import { ReflectionsFacade } from './reflections.facade';
import { MOCK_STORE$ } from '../store/testing';
import { loadReflections } from '../store';

describe('ReflectionsFacade', () => {
  let reflectionsFacade: ReflectionsFacade;

  beforeEach(() => {
    reflectionsFacade = new ReflectionsFacade(MOCK_STORE$);
  });

  describe('#loadReflections method', () => {
    it('should load reflections', () => {
      const dispatchSpy = spyOn(MOCK_STORE$, 'dispatch');
      const action = loadReflections();
      reflectionsFacade.loadReflections();
      expect(dispatchSpy).toHaveBeenCalledWith(action);
    });
  });
});
