import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';

import { ApplicationState } from 'src/app/store/models/application-state.model';
import { REFLECTION_INITIAL_MOCK_STATE as initialState } from '../../store/state/reflection-initial-mock-state';
import { ReflectionDetailsComponent } from './reflection-details.component';
import { getSelectedReflection } from '../../store';
import { of } from 'rxjs';

describe('ReflectionDetailsComponent', () => {
  let component: ReflectionDetailsComponent;
  let fixture: ComponentFixture<ReflectionDetailsComponent>;
  let store: MockStore<ApplicationState>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ReflectionDetailsComponent],
      providers: [provideMockStore({ initialState })],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReflectionDetailsComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(MockStore);
    fixture.detectChanges();
  });

  it('should display a selected reflection', (done) => {
    spyOn(store, 'select').and.returnValue(of(initialState.reflection));
    component.ngOnInit();
    expect(store.select).toHaveBeenCalledWith(getSelectedReflection);
    component.reflection$.subscribe((reflection) => {
      expect(reflection).toEqual(initialState.reflection);
      done();
    });
  });
});
