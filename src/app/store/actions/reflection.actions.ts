import { createAction, props, union } from '@ngrx/store';
import { Reflection } from 'src/app/models/reflection.model';
import { Guid } from 'guid-typescript';

// Click Events
export const addReflection = createAction(
    '[Reflections] Create New Reflection'
);

export const saveNewReflection = createAction(
    '[Reflections] Save New Reflection'
);

export const cancelNewReflection = createAction(
    '[Reflections] Cancel New Reflection'
);


// API Events
export const loadReflections = createAction(
    '[API Reflections] Load Reflections'
);

export const loadReflectionsSuccess = createAction(
    '[API Reflections] Load Reflections Success',
    props<{ reflections: Reflection[] }>()
);

export const loadReflectionsFailure = createAction(
    '[API Reflections] Load Reflections Failure',
    props<{ error: any}>()
);

export const loadReflection = createAction(
    '[API Reflections] Load Reflection',
    props<{ reflectionId: Guid}>()
);

export const loadReflectionSuccess = createAction(
    '[API Reflections] Load Reflection Success',
    props<{ reflection: Reflection }>()
);

export const loadReflectionFailure = createAction(
    '[API Reflections] Load Reflection Failure',
    props<{ error: any}>()
);


export const createNewReflection = createAction(
    '[API Reflections] Create Reflection');

export const createNewReflectionSuccess = createAction(
    '[API Reflections] Create Reflection Success'
);

export const createNewReflectionFailure = createAction(
    '[API Reflections] Create Reflection Failure'
);


const all = union({
    addReflection,
    saveNewReflection,
    cancelNewReflection,
    loadReflections,
    loadReflectionsSuccess,
    loadReflectionsFailure,
    loadReflection,
    loadReflectionSuccess,
    loadReflectionFailure,
    createNewReflection,
    createNewReflectionSuccess,
    createNewReflectionFailure
});

export type ReflectionActionsTypes = typeof all;
