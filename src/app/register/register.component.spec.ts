import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { provideMockStore, MockStore } from '@ngrx/store/testing';

import { RegisterComponent } from './register.component';
import { ApplicationState } from '../store/models/application-state.model';
import { requestRegistration } from '../store';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;
  let store: MockStore<ApplicationState>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterComponent],
      providers: [FormBuilder, provideMockStore()],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(MockStore);
    fixture.detectChanges();
  });

  it('should dispatch regiser information', () => {
    const dispatchSpy = spyOn(store, 'dispatch');
    const action = requestRegistration({ email: '', username: '', password: '' });
    component.submit();
    expect(dispatchSpy).toHaveBeenCalledWith(action);
  });
});
