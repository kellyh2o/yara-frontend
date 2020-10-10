import { createSelector } from '@ngrx/store';
import { Params } from '@angular/router';
import { getRouteParams } from 'src/app/store/selectors/router.selectors';
import { ApplicationState } from 'src/app/store/models/application-state.model';
import { ReflectionsState } from '../reflections-state.model';
import { ReflectionState } from '../reflection-state.model';

export const reflectionsState = ({ reflectionsState }: ApplicationState) => reflectionsState;
export const selectedReflectionState = ({ selectedReflection }: ApplicationState) => selectedReflection;

export const getReflections = createSelector(
  reflectionsState,
  (state: ReflectionsState) => state?.reflections
);

export const getReflectionsLoaded = createSelector(
  reflectionsState,
  (state: ReflectionsState) => state?.loaded
);

export const getSelectedReflection = createSelector(
  selectedReflectionState,
  (state: ReflectionState) => state?.reflection
);

export const getSelectedReflectionId = createSelector(
  getRouteParams,
  (params: Params) => params['reflectionId']
);

export const getShowReflections = createSelector(
  reflectionsState,
  ({ showReflections }: ReflectionsState) => showReflections
);

export const getShowNewReflectionForm = createSelector(
  reflectionsState,
  ({ showReflections }: ReflectionsState) => !showReflections
);


