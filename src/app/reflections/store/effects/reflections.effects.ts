import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import {
    loadReflection,
    loadReflectionSuccess,
    loadReflectionFailure,
    loadReflections,
    loadReflectionsSuccess,
    loadReflectionsFailure,
    createNewReflection,
    createNewReflectionSuccess,
    createNewReflectionFailure
} from '../actions';
import { catchError, map, switchMap, withLatestFrom, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { Injectable } from '@angular/core';
import { selectedReflectionState } from '../selectors'
import { ReflectionResponse, ReflectionType } from 'src/app/services/reflection-response.model';
import { load$ } from 'src/app/store/router-helpers';
import { ReflectionState } from '../reflection-state.model';
import { ApplicationState } from 'src/app/store/models/application-state.model';
import { ReflectionsService } from 'src/app/services/reflections.service';
import { Router } from '@angular/router';
import { routeChange } from 'src/app/store';


@Injectable({ providedIn: 'root' })
export class ReflectionsEffects {
  loadReflections$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadReflections),
      switchMap(() =>
        this.reflectionsService.getReflections().pipe(
          map((reflections: ReflectionResponse[]) => loadReflectionsSuccess({ reflections })),
          catchError((error) => of(loadReflectionsFailure({ error })))
        )
      )
    )
  );

  // side effect
  loadReflection$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadReflection),
      switchMap(( { reflectionId }) =>
        this.reflectionsService.getReflection(reflectionId).pipe(
          map((reflection: ReflectionResponse) => loadReflectionSuccess({ reflection })),
          catchError((error) => of(loadReflectionFailure({ error })))
        )
      )
    )
  );

  createReflection$ = createEffect(() => 
    this.actions$.pipe(
      ofType(createNewReflection),
      switchMap(( { title, text }) =>
        this.reflectionsService.createReflection(title, text, ReflectionType.Open).pipe(
          map(() => createNewReflectionSuccess()),
          catchError((error) => of(createNewReflectionFailure({ error })))
        )
      )
    )
  );

  checkReflectionRoute$ = createEffect(() =>
    this.actions$.pipe(
      ofType(routeChange),
      withLatestFrom(this.store.select(selectedReflectionState)),
      load$<ReflectionState>(loadReflection, 'reflections/:reflectionId')
    )
  );

  // side effect
  createRegistrationSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(createNewReflectionSuccess),
        tap(() => {
          this.router.navigateByUrl('/');
        })
      ),
    { dispatch: false }
  );
  

  constructor(
    private actions$: Actions,
    private store: Store<ApplicationState>,
    private reflectionsService: ReflectionsService,
    private router: Router
  ) {}
}
