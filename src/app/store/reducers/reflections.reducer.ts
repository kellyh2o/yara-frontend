import { createReducer, on, Action } from '@ngrx/store';
import { 
  addReflection, 
  saveNewReflection, 
  cancelNewReflection,
  loadReflections,
  loadReflectionsFailure,
  loadReflectionsSuccess
} from '../actions/reflection.actions';
import { REFLECTIONS_INITIAL_STATE } from '../state/reflections-initial-state';
import { ReflectionsState } from '../models/reflections-state.model';

const reducer = createReducer(
    REFLECTIONS_INITIAL_STATE,
    on(loadReflections, (state) => ({ ...state, loading: true})),
    on(loadReflectionsSuccess, (state, { reflections }) => ({
        ...state,
        reflections,
        loading: false,
        loaded: true
    })),
    on(loadReflectionsFailure, (state) => ({
        ...state,
        loading: false,
        loaded: false,
    })),
    on(addReflection, (state) => ({ ...state, showReflections: false })),
    on(cancelNewReflection, (state) => ({ ...state, showReflections: true })),
);

export function reflectionsReducer(state: ReflectionsState | undefined, action: Action) {
  return reducer(state, action);
}