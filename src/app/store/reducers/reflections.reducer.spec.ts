import { ReflectionState } from '../models/reflection-state.model';
import { addReflection, cancelNewReflection, saveNewReflection, loadReflections, loadReflectionsSuccess, loadReflectionsFailure } from '../actions/reflection.actions';
import { REFLECTION_INITIAL_MOCK_STATE } from '../state/reflection-initial-mock-state';
import { reflectionReducer } from './reflection.reducer';
import { ReflectionType } from 'src/app/services/reflection-response.model';
import { Guid } from 'guid-typescript';
import { Reflection } from 'src/app/models/reflection.model';
import { ReflectionsState } from '../models/reflections-state.model';
import { REFLECTIONS_INITIAL_MOCK_STATE } from '../state/reflections-initial-mock-state';
import { reflectionsReducer } from './reflections.reducer';

describe('Reflections Reducer', () => {
    it('should set the loading key to true on `loadReflections`', () => {
        const action = loadReflections();
        const expected: ReflectionState = {
            ...REFLECTION_INITIAL_MOCK_STATE,
            loading: true,
            loaded: false
        };

        const actual = reflectionReducer(REFLECTION_INITIAL_MOCK_STATE, action);

        expect(actual).toEqual(expected);
    });

    it('should set the loaded key to false on `loadReflections`', () => {
        const action = loadReflections();
        const expected: ReflectionState = {
            ...REFLECTION_INITIAL_MOCK_STATE,
            loading: true,
            loaded: false
        };

        const actual = reflectionReducer(REFLECTION_INITIAL_MOCK_STATE, action);

        expect(actual).toEqual(expected);
    });

    it('should set the reflections key to the reflections returned by the API on `loadReflectionsSuccess`', () => {
        const reflections = [
            {
                _id: Guid.create(),
                title: "Test",
                text: "test text",
                type: ReflectionType.Open,
                createdAt: new Date()
            },
        ] as Reflection[];

        const action = loadReflectionsSuccess({
            reflections: reflections
        });

        const expected: ReflectionsState = {
            ...REFLECTIONS_INITIAL_MOCK_STATE,
            reflections: reflections,
            loading: false,
            loaded: true
        };

        const actual = reflectionsReducer(REFLECTIONS_INITIAL_MOCK_STATE, action);

        expect(actual).toEqual(expected);
    });

    it('should set the loading key to false on `loadReflectionsSuccess`', () => {
        const reflections = [
            {
                _id: Guid.create(),
                title: "Test",
                text: "test text",
                type: ReflectionType.Open,
                createdAt: new Date()
            },
        ] as Reflection[];

        const action = loadReflectionsSuccess({
            reflections: reflections
        });

        const expected: ReflectionsState = {
            ...REFLECTIONS_INITIAL_MOCK_STATE,
            reflections: reflections,
            loading: false,
            loaded: true
        };

        const actual = reflectionsReducer(REFLECTIONS_INITIAL_MOCK_STATE, action);

        expect(actual).toEqual(expected);
    });

    it('should set the loaded key to true on `loadReflectionsSuccess`', () => {
        const reflections = [
            {
                _id: Guid.create(),
                title: "Test",
                text: "test text",
                type: ReflectionType.Open,
                createdAt: new Date()
            },
        ] as Reflection[];

        const action = loadReflectionsSuccess({
            reflections: reflections
        });

        const expected: ReflectionsState = {
            ...REFLECTIONS_INITIAL_MOCK_STATE,
            reflections: reflections,
            loading: false,
            loaded: true
        };

        const actual = reflectionsReducer(REFLECTIONS_INITIAL_MOCK_STATE, action);

        expect(actual).toEqual(expected);
    });

    it('should set the loading key to false on `loadReflectionsFailure`', () => {
        const action = loadReflectionsFailure({ error: "Failure"});
        const expected: ReflectionState = {
            ...REFLECTION_INITIAL_MOCK_STATE,
            loading: false,
            loaded: false
        };

        const actual = reflectionReducer(REFLECTION_INITIAL_MOCK_STATE, action);

        expect(actual).toEqual(expected);
    });
    
    it('should set the loaded key to false on `loadReflectionsFailure`', () => {
        const action = loadReflectionsFailure({ error: "Failure"});
        const expected: ReflectionState = {
            ...REFLECTION_INITIAL_MOCK_STATE,
            loading: false,
            loaded: false
        };

        const actual = reflectionReducer(REFLECTION_INITIAL_MOCK_STATE, action);

        expect(actual).toEqual(expected);
    });

    it('should set the showReflections key to false on `addReflection`', () => {
        const action = addReflection();
        const expected: ReflectionsState = {
            ...REFLECTIONS_INITIAL_MOCK_STATE,
            showReflections: false,
        };

        const actual = reflectionsReducer(REFLECTIONS_INITIAL_MOCK_STATE, action);

        expect(actual).toEqual(expected);
    });

    it('should set the showReflections key to true on `cancelNewReflection`', () => {
        const action = cancelNewReflection();
        const expected: ReflectionsState = {
            ...REFLECTIONS_INITIAL_MOCK_STATE,
            showReflections: true,
        };

        const actual = reflectionsReducer(REFLECTIONS_INITIAL_MOCK_STATE, action);

        expect(actual).toEqual(expected);
    });
});



