import { createReducer, on, Action } from '@ngrx/store';
import { 
  createNewReflection, 
  saveNewReflection, 
  cancelNewReflection,
  requestReflections,
  requestReflectionsFailure,
  requestReflectionsSuccess
} from '../actions/reflection.actions';
import { ReflectionState } from '../models/reflection-state.model';
import { REFLECTION_INITIAL_STATE } from '../state/reflection-initial-state';

const reducer = createReducer(
  REFLECTION_INITIAL_STATE,
  on(createNewReflection, (state) => ({ ...state, showReflections: false })),
  on(cancelNewReflection, (state) => ({ ...state, showReflections: true })),
  on(requestReflections, (state) => ({ ...state, loading: true})),
  on(requestReflectionsSuccess, (state, { reflections }) => ({
    ...state, 
    reflections,
    loading: false
  })),
  on(requestReflectionsFailure, (state) => ({
    ...state,
    loading: false,
  }))
);

export function reflectionReducer(state: ReflectionState | undefined, action: Action) {
  return reducer(state, action);
}