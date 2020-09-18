import { createReducer, on, Action } from '@ngrx/store';
import { createNewReflection, saveNewReflection, cancelNewReflection } from '../actions/reflection.actions';
import { ReflectionState } from '../state/reflection-state.model';

export const initialState: ReflectionState = {
  showReflections: true,
};

const reducer = createReducer(
  initialState,
  on(createNewReflection, (state) => ({ ...state, showReflections: false })),
  on(cancelNewReflection, (state) => ({ ...state, showReflections: true }))
);

export function reflectionReducer(state: ReflectionState | undefined, action: Action) {
  return reducer(state, action);
}