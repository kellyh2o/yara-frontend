import { createAction, union } from '@ngrx/store';

export const createNewReflection = createAction('[Reflections] Create New Reflection');
export const saveNewReflection = createAction('[Reflections] Save New Reflection');
export const cancelNewReflection = createAction('[Reflections] Cancel New Reflection');

const all = union({
    createNewReflection,
    saveNewReflection,
    cancelNewReflection
});

export type ReflectionActionsTypes = typeof all;
