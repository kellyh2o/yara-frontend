import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { provideMockStore, MockStore } from '@ngrx/store/testing';

import { CreateReflectionComponent } from './create-reflection.component';
import { ReflectionsFacade } from '../reflections/reflections.facade';
import { ApplicationState } from '../store/models/application-state.model';
import { createNewReflection } from '../reflections/store';
import { logout } from '../store';

describe('CreateReflectionComponent', () => {
  let component: CreateReflectionComponent;
  let fixture: ComponentFixture<CreateReflectionComponent>;
  let store: MockStore<ApplicationState>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CreateReflectionComponent],
      providers: [FormBuilder, provideMockStore()],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateReflectionComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(MockStore);
    fixture.detectChanges();
  });

  it('should dispatch a create new reflection action via the facade on submit', () => {
    const dispatchSpy = spyOn(store, 'dispatch');
    const action = createNewReflection({ title: '', text: ''});
    component.submit();
    expect(dispatchSpy).toHaveBeenCalledWith(action);
  });
});
