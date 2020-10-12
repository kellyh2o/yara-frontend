import { ReflectionType } from 'src/app/services/reflection-response.model';
import { Guid } from 'guid-typescript';
import { reflectionsReducer } from './reflections.reducer';
import { ReflectionsState } from '../reflections-state.model';
import { REFLECTIONS_INITIAL_MOCK_STATE } from '../reflections-initial-mock-state';
import { loadReflections, loadReflectionsSuccess, loadReflectionsFailure, addReflection, cancelNewReflection } from '../actions';
import { Reflection } from '../../models/reflection.model';

describe('Reflections Reducer', () => {
    it('should set the loading key to true on `loadReflections`', () => {
        const action = loadReflections();
        const expected: ReflectionsState = {
            ...REFLECTIONS_INITIAL_MOCK_STATE,
            loading: true,
            loaded: false
        };

        const actual = reflectionsReducer(REFLECTIONS_INITIAL_MOCK_STATE, action);

        expect(actual).toEqual(expected);
    });

    it('should set the loaded key to false on `loadReflections`', () => {
        const action = loadReflections();
        const expected: ReflectionsState = {
            ...REFLECTIONS_INITIAL_MOCK_STATE,
            loading: true,
            loaded: false
        };

        const actual = reflectionsReducer(REFLECTIONS_INITIAL_MOCK_STATE, action);

        expect(actual).toEqual(expected);
    });

    it('should set the reflections key to the reflections returned by the API on `loadReflectionsSuccess`', () => {
        const reflections = [
            {
                _id: Guid.create().toString(),
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
                _id: Guid.create().toString(),
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
                _id: Guid.create().toString(),
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
        const expected: ReflectionsState = {
            ...REFLECTIONS_INITIAL_MOCK_STATE,
            loading: false,
            loaded: false
        };

        const actual = reflectionsReducer(REFLECTIONS_INITIAL_MOCK_STATE, action);

        expect(actual).toEqual(expected);
    });
    
    it('should set the loaded key to false on `loadReflectionsFailure`', () => {
        const action = loadReflectionsFailure({ error: "Failure"});
        const expected: ReflectionsState = {
            ...REFLECTIONS_INITIAL_MOCK_STATE,
            loading: false,
            loaded: false
        };

        const actual = reflectionsReducer(REFLECTIONS_INITIAL_MOCK_STATE, action);

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



