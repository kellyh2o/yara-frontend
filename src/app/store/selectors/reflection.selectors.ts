import { createSelector } from '@ngrx/store';
import { ApplicationState } from '../models/application-state.model';
import { ReflectionState } from '../models/reflection-state.model';

export const reflectionState = ({ reflectionState }: ApplicationState) => reflectionState;
export const getShowReflections = createSelector(
  reflectionState,
  ({ showReflections }: ReflectionState) => showReflections
);
export const getShowNewReflectionForm = createSelector(
  reflectionState,
  ({ showReflections }: ReflectionState) => !showReflections
);