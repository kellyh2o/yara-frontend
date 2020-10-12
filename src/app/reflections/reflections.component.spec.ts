import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { REFLECTIONS_INITIAL_MOCK_STATE as initialState } from './store/reflections-initial-mock-state';

import { ReflectionsComponent } from './reflections.component';
import { ReflectionsFacade } from './reflections.facade';
import { MOCK_REFLECTION } from './store/reflection-initial-mock-state';

const MockReflectionsFacade = {
  reflections$: of([MOCK_REFLECTION]),
  loadReflections: () => null,
};

describe('ReflectionsComponent', () => {
  let component: ReflectionsComponent;
  let fixture: ComponentFixture<ReflectionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ReflectionsComponent],
      providers: [{ provide: ReflectionsFacade, useValue: MockReflectionsFacade }],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReflectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should display reflections', (done) => {
    component.ngOnInit();
    component.reflections$.subscribe((reflections) => {
      expect(reflections).toEqual(initialState.reflections);
      done();
    });
  });
});
