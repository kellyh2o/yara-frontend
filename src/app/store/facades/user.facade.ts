import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getIsAuth } from '..';
import { ApplicationState } from '../models/application-state.model';
import { logout, requestLogin, requestRegistration } from '../../store/actions/auth.actions';

@Injectable({ providedIn: 'root' })
export class UserFacade {
  readonly isAuth$: Observable<boolean> = this.store.select(getIsAuth);

  constructor(private store: Store<ApplicationState>) {}

  logout(): void {
    this.store.dispatch(logout());
  }

  login(username, password): void {
    this.store.dispatch(requestLogin({ username, password }));
  }

  register(email, username, password): void {
    this.store.dispatch(requestRegistration({ email, username, password}));
  }
}
