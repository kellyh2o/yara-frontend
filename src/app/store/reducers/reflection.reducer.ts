import { createReducer, on, Action } from '@ngrx/store';
import { loadReflection, loadReflectionFailure, loadReflectionSuccess } from '../actions';
import { REFLECTION_INITIAL_STATE } from '../state/reflection-initial-state';
import { ReflectionState } from '../models/reflection-state.model';

const reducer = createReducer(
  REFLECTION_INITIAL_STATE,
  on(loadReflection, (state) => ({ ...state, loading: true })),
  on(loadReflectionSuccess, (state, { reflection }) => ({
    ...state,
    reflection,
    loading: false,
    loaded: true,
  })),
  on(loadReflectionFailure, (state) => ({
    ...state,
    loading: false,
    loaded: false,
  }))
);

export function reflectionReducer(state: ReflectionState | undefined, action: Action) {
  return reducer(state, action);
}
