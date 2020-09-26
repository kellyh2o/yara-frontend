import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReflectionsComponent } from './reflections.component';
import { ApplicationState } from '../store/models/application-state.model';
import { MockStore, provideMockStore } from '@ngrx/store/testing';

import { REFLECTIONS_INITIAL_MOCK_STATE as initialState } from '../store/state/reflections-initial-mock-state';
import { of } from 'rxjs';
import { getReflections, loadReflections } from '../store';

describe('ReflectionsComponent', () => {
  let component: ReflectionsComponent;
  let fixture: ComponentFixture<ReflectionsComponent>;
  let store: MockStore<ApplicationState>;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ReflectionsComponent],
      providers: [provideMockStore({ initialState })],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReflectionsComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(MockStore);
    fixture.detectChanges();
  });

  it('should display reflections', (done) => {
    spyOn(store, 'select').and.returnValue(of(initialState.reflections));
    component.ngOnInit();
    expect(store.select).toHaveBeenCalledWith(getReflections);
    component.reflections$.subscribe((reflections) => {
      expect(reflections).toEqual(initialState.reflections);
      done();
    });
  });

  it('should load reflections', () => {
    const dispatchSpy = spyOn(store, 'dispatch');
    const action = loadReflections();
    component.ngOnInit();
    expect(dispatchSpy).toHaveBeenCalledWith(action);
  });
});
