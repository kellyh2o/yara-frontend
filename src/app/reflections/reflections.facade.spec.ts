import { ReflectionsFacade } from './reflections.facade';
import { MOCK_STORE$ } from '../store/testing';
import { loadReflections, loadReflection, createNewReflection } from './store';
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

  describe('#createReflection method', () => {
    it('should create a reflection', () => {
      const title = 'ReflectionTitle';
      const text = 'ReflectionText';

      const dispatchSpy = spyOn(MOCK_STORE$, 'dispatch');
      const action = createNewReflection({ title: title, text: text });
      reflectionsFacade.createReflection(title, text);
      expect(dispatchSpy).toHaveBeenCalledWith(action);
    });
  });
});
