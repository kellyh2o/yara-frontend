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

export const initialState: ReflectionState = {
  showReflections: true,
  reflections: []
};

const reducer = createReducer(
  initialState,
  on(createNewReflection, (state) => ({ ...state, showReflections: false })),
  on(cancelNewReflection, (state) => ({ ...state, showReflections: true })),
  on(requestReflectionsSuccess, (state) => ({
    ...state, 
    reflections: []
  })),
);

export function reflectionReducer(state: ReflectionState | undefined, action: Action) {
  return reducer(state, action);
}