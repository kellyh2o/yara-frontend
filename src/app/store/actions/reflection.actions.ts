import { createAction, props, union } from '@ngrx/store';

export const createNewReflection = createAction(
    '[Reflections] Create New Reflection'
);

export const saveNewReflection = createAction(
    '[Reflections] Save New Reflection'
);

export const cancelNewReflection = createAction(
    '[Reflections] Cancel New Reflection'
);

export const requestReflections = createAction(
    '[API Reflections] Request Reflections',
    props<{ userId: string}>()
);

export const requestReflectionsSuccess = createAction(
    '[API Reflections] Request Reflections Success',
    props<{ userId: string}>()
);

export const requestReflectionsFailure = createAction(
    '[API Reflections] Request Reflections Failure',
    props<{ userId: string}>()
);

const all = union({
    createNewReflection,
    saveNewReflection,
    cancelNewReflection,
    requestReflections,
    requestReflectionsSuccess,
    requestReflectionsFailure
});

export type ReflectionActionsTypes = typeof all;
