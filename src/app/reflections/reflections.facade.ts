import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ApplicationState } from '../store/models/application-state.model';
import { Reflection } from '../models/reflection.model';

import { loadHeroes, getReflections, getSelectedReflection } from './store';
import { getReflections } from '../store';

@Injectable({ providedIn: 'root' })
export class ReflectionsFacade {
  readonly reflections$: Observable<Reflection[]> = this.store.select(getReflections);
  readonly selectedReflection$: Observable<Reflection> = this.store.select(getSelectedReflection);

  constructor(private store: Store<ApplicationState>) {}

  loadHeroes(): void {
    this.store.dispatch(loadHeroes());
  }
}
