import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import {
    loadReflection,
    loadReflectionSuccess,
    loadReflectionFailure,
    loadReflections,
    loadReflectionsSuccess,
    loadReflectionsFailure
} from '../actions/reflection.actions';
import { ReflectionService } from '../../services/reflection.service';
import { catchError, map, switchMap, withLatestFrom } from 'rxjs/operators';
import { of } from 'rxjs';
import { ReflectionResponse } from '../../services/reflection-response.model';
import { Injectable } from '@angular/core';
import { ApplicationState } from '../models/application-state.model';
import { ReflectionState } from '../models/reflection-state.model';
import { routeChange } from 'src/app/store/actions/router.actions';
import { load$ } from '../../store/router-helpers';
import { selectedReflectionState } from '../selectors'


@Injectable({ providedIn: 'root' })
export class ReflectionEffects {
  loadReflections$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadReflections),
      switchMap(() =>
        this.reflectionService.getReflections().pipe(
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
        this.reflectionService.getReflection(reflectionId).pipe(
          map((reflection: ReflectionResponse) => loadReflectionSuccess({ reflection })),
          catchError((error) => of(loadReflectionFailure({ error })))
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

  constructor(
    private actions$: Actions,
    private store: Store<ApplicationState>,
    private reflectionService: ReflectionService
  ) {}
}
