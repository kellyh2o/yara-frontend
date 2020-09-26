import { createAction, props, union } from '@ngrx/store';
import { Reflection } from 'src/app/models/reflection.model';

export const createNewReflection = createAction(
    '[Reflections] Create New Reflection'
);

export const saveNewReflection = createAction(
    '[Reflections] Save New Reflection'
);

export const cancelNewReflection = createAction(
    '[Reflections] Cancel New Reflection'
);

export const loadReflections = createAction(
    '[API Reflections] Request Reflections'
);

export const requestReflectionsSuccess = createAction(
    '[API Reflections] Request Reflections Success',
    props<{ reflections: Reflection[] }>()
);

export const requestReflectionsFailure = createAction(
    '[API Reflections] Request Reflections Failure',
    props<{ error: any}>()
);

export const requestCreateNewReflection = createAction(
    '[API Reflections] Request Create Reflection');

export const requestCreateNewReflectionSuccess = createAction(
    '[API Reflections] Request Create Reflection Success'
);

export const requestCreateNewReflectionFailure = createAction(
    '[API Reflections] Request Create Reflection Failure'
);


const all = union({
    createNewReflection,
    saveNewReflection,
    cancelNewReflection,
    loadReflections,
    requestReflectionsSuccess,
    requestReflectionsFailure,
    requestCreateNewReflection,
    requestCreateNewReflectionSuccess,
    requestCreateNewReflectionFailure
});

export type ReflectionActionsTypes = typeof all;
