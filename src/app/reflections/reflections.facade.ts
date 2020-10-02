import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ApplicationState } from '../store/models/application-state.model';
import { Reflection } from '../models/reflection.model';

import { loadReflections, getReflections, getSelectedReflection } from '../store';

@Injectable({ providedIn: 'root' })
export class ReflectionsFacade {
  readonly reflections$: Observable<Reflection[]> = this.store.select(getReflections);
  readonly selectedReflection$: Observable<Reflection> = this.store.select(getSelectedReflection);

  constructor(private store: Store<ApplicationState>) {}

  loadReflections(): void {
    this.store.dispatch(loadReflections());
  }
}
