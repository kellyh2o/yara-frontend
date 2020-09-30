import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Store } from '@ngrx/store';
import { ReflectionResponse } from 'src/app/services/reflection-response.model';
import { ReflectionsService } from 'src/app/services/reflection.service';
import { MOCK_STORE$ } from 'src/app/store/testing';
import {
  loadReflection,
  loadReflections,
  loadReflectionsFailure,
  loadReflectionsSuccess,
  loadReflectionFailure,
  loadReflectionSuccess,
} from '../actions';
import { MOCK_REFLECTION } from '../reflection-initial-mock-state';
import { ReflectionsEffects } from './reflections.effects';
import { cold, hot } from 'jasmine-marbles';
import { Observable, of } from 'rxjs';

const mockReflectionsService = {
  getReflections: () => of([MOCK_REFLECTION]),
  getReflection: () => of(MOCK_REFLECTION),
  // createReflection: () => {}
};

const mockReflectionsResponse: ReflectionResponse[] = [MOCK_REFLECTION];

describe('ReflectionsEffects', () => {
  let actions$: Observable<any>;
  let reflectionsService: ReflectionsService;
  let effects: ReflectionsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ReflectionsEffects,
        provideMockActions(() => actions$),
        { provide: Store, useValue: MOCK_STORE$ },
        { provide: ReflectionsService, useValue: mockReflectionsService },
      ],
    });
    effects = TestBed.inject(ReflectionsEffects);
    reflectionsService = TestBed.inject(ReflectionsService);
  });

  describe('loadReflections$', () => {
    it('should successfully load reflections', () => {
      spyOn(reflectionsService, 'getReflections').and.returnValue(of(mockReflectionsResponse));
      actions$ = hot('a', {
        a: loadReflections(),
      });

      const expected$ = cold('b', {
        b: loadReflectionsSuccess({ reflections: [MOCK_REFLECTION] }),
      });

      expect(effects.loadReflections$).toBeObservable(expected$);
    });

    it('should fail to load reflections', () => {
      const errMsg = 'I tried...';
      const error$ = cold('#', {}, errMsg);

      spyOn(reflectionsService, 'getReflections').and.returnValue(error$);
      actions$ = hot('a', {
        a: loadReflections(),
      });

      const expected$ = cold('b', {
        b: loadReflectionsFailure({ error: errMsg }),
      });

      expect(effects.loadReflections$).toBeObservable(expected$);
    });
  });

  describe('loadReflection$', () => {
    it('should successfully load a reflection', () => {
      spyOn(reflectionsService, 'getReflection').and.returnValue(
        of(mockReflectionsResponse[0])
      );
      actions$ = hot('a', {
        a: loadReflection({ reflectionId: 'reflectionId' }),
      });

      const expected$ = cold('b', {
        b: loadReflectionSuccess({ reflection: MOCK_REFLECTION }),
      });
      expect(effects.loadReflection$).toBeObservable(expected$);
    });

    it('should fail to load a reflection', () => {
      const errMsg = 'I tried...';
      const error$ = cold('#', {}, errMsg);

      spyOn(reflectionsService, 'getReflection').and.returnValue(error$);
      actions$ = hot('a', {
        a: loadReflection({ reflectionId: 'reflectionId' }),
      });

      const expected$ = cold('b', {
        b: loadReflectionFailure({ error: errMsg }),
      });

      expect(effects.loadReflection$).toBeObservable(expected$);
    });
  });
});
