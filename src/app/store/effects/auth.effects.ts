import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import {
    requestLogin,
    requestLoginFailure,
    requestLoginSuccess
} from '../actions/auth.actions';
import { AuthService } from '../../services/auth.service';
import { catchError, map, switchMap, withLatestFrom, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { AuthResponse } from '../../services/user-response.model';
import { Injectable } from '@angular/core';
import { load$ } from '../../store/router-helpers';
import { ReflectionsState } from '../models/reflections-state.model';
import { loadReflections, go, loadReflectionFailure, loadReflectionSuccess, routeChange } from '../actions';
import { getReflections, getToken } from '../selectors';
import { ApplicationState } from '../models/application-state.model';
import { ReflectionResponse } from 'src/app/services/reflection-response.model';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root'})
export class AuthEffects {
    login$ = createEffect(() => 
        this.actions$.pipe(
            ofType(requestLogin),
            switchMap(({ username, password }) => 
                this.authService.login(username, password).pipe(
                    map(({ token }: AuthResponse) => requestLoginSuccess({ token })),
                    catchError((error) => of(requestLoginFailure({ error })))
                )
            )
        )
    );

    // side effect
    loginSuccess$ = createEffect(
      () =>
        this.actions$.pipe(
          ofType(requestLoginSuccess),
          tap(({ token }) => {
            localStorage.setItem('token', token);
            this.router.navigateByUrl('/');
          })
        ),
      { dispatch: false }
    );

    // TODO:
    // goPastLogin$ = createEffect(() => 
    //     this.actions$.pipe(
    //         ofType(requestLoginSuccess),
    //         tap((action) => {
    //             this.store$.dispatch(go({ path: ['reflections']}))
    //         })
    //     ),
    //     {dispatch: false}
    // );
    

    constructor(
        private actions$: Actions,
        //private store$: Store<ApplicationState>,
        private authService: AuthService,
        private router: Router,
    ) {}
}