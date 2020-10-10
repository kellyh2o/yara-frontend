import { createReducer, on, Action } from '@ngrx/store';
import { REFLECTIONS_INITIAL_STATE } from '../reflections-initial-state';
import { loadReflections, loadReflectionsSuccess, loadReflectionsFailure, addReflection, cancelNewReflection } from '../actions';
import { ReflectionsState } from '../reflections-state.model';

const reducer = createReducer(
    REFLECTIONS_INITIAL_STATE,
    on(loadReflections, (state) => ({ ...state, loading: true, loaded: false})),
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