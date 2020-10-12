import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { provideMockStore, MockStore } from '@ngrx/store/testing';

import { LogoutComponent } from './logout.component';
import { ApplicationState } from '../store/models/application-state.model';
import { logout } from '../store';

describe('LogoutComponent', () => {
  let component: LogoutComponent;
  let fixture: ComponentFixture<LogoutComponent>;
  let store: MockStore<ApplicationState>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LogoutComponent],
      providers: [FormBuilder, provideMockStore()],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoutComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(MockStore);
    fixture.detectChanges();
  });

  it('should dispatch a logout action via the facade on submit', () => {
    const dispatchSpy = spyOn(store, 'dispatch');
    const action = logout();
    component.submit();
    expect(dispatchSpy).toHaveBeenCalledWith(action);
  });
});
