import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { provideMockStore, MockStore } from '@ngrx/store/testing';

import { LoginComponent } from './login.component';
import { ApplicationState } from '../store/models/application-state.model';
import { requestLogin } from '../store';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let store: MockStore<ApplicationState>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      providers: [FormBuilder, provideMockStore()],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(MockStore);
    fixture.detectChanges();
  });

  it('should dispatch a login action via the facade on submit', () => {
    const dispatchSpy = spyOn(store, 'dispatch');
    const action = requestLogin({ username: '', password: '' });
    component.submit();
    expect(dispatchSpy).toHaveBeenCalledWith(action);
  });
});
