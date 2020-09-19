import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import {
    requestReflections,
    requestReflectionsSuccess,
    requestReflectionsFailure
} from '../actions/reflection.actions';
import { ReflectionService } from '../../services/reflection.service';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { ReflectionResponse } from '../../services/reflection-response.model';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root'})
export class ReflectionEffects {
    requestReflections$ = createEffect(() => 
        this.actions$.pipe(
            ofType(requestReflections),
            switchMap(({ userId }) => 
                this.reflectionService.getReflections(userId).pipe(
                    map(({ reflections }: ReflectionResponse ) => requestReflectionsSuccess({ reflections })),
                    catchError((error) => of(requestReflectionsFailure({ error })))
                )
            )
        )
    );

    constructor(
        private actions$: Actions,
        private reflectionService: ReflectionService
    ) {}
}