import { ReflectionsFacade } from './reflections.facade';
import { MOCK_STORE$ } from '../store/testing';
import { loadReflections, loadReflection } from '../store';
import { Guid } from 'guid-typescript';

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

  describe('#loadReflection method', () => {
    it('should load a reflection', () => {
      const testGuid = Guid.create().toString();

      const dispatchSpy = spyOn(MOCK_STORE$, 'dispatch');
      const action = loadReflection({ reflectionId: testGuid });
      reflectionsFacade.loadReflection(testGuid);
      expect(dispatchSpy).toHaveBeenCalledWith(action);
    });
  });
});
