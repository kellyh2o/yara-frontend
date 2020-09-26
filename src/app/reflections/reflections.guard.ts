import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
} from '@angular/router';
import { Store } from '@ngrx/store';

import { ApplicationState } from '../store/models/application-state.model';
import { loadReflections, getReflectionsLoaded } from '../store';
import { catchError, switchMap, filter, first, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ReflectionsGuard implements CanActivate {
  constructor(private store: Store<ApplicationState>) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.store.select(getReflectionsLoaded).pipe(
      tap((loaded: boolean) => {
        if (!loaded) {
          this.store.dispatch(loadReflections());
        }
      }),
      filter((loaded: boolean) => loaded),
      first(),
      switchMap(() => of(true)),
      catchError(() => of(false))
    );
  }
}
