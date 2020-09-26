import { ReflectionState } from '../models/reflection-state.model';
import { addReflection, cancelNewReflection, saveNewReflection, loadReflections, loadReflectionsSuccess, loadReflectionsFailure } from '../actions/reflection.actions';
import { REFLECTION_INITIAL_MOCK_STATE } from '../state/reflection-initial-mock-state';
import { reflectionReducer } from './reflection.reducer';
import { ReflectionType } from 'src/app/services/reflection-response.model';
import { Guid } from 'guid-typescript';
import { Reflection } from 'src/app/models/reflection.model';

describe('Reflection Reducer', () => {
    it('should set the showReflections key to false on `addReflection`', () => {
        const action = addReflection();
        const expected: ReflectionState = {
            ...REFLECTION_INITIAL_MOCK_STATE,
            showReflections: false,
        };

        const actual = reflectionReducer(REFLECTION_INITIAL_MOCK_STATE, action);

        expect(actual).toEqual(expected);
    });
});

describe('Reflection Reducer', () => {
    it('should set the showReflections key to true on `cancelNewReflection`', () => {
        const action = cancelNewReflection();
        const expected: ReflectionState = {
            ...REFLECTION_INITIAL_MOCK_STATE,
            showReflections: true,
        };

        const actual = reflectionReducer(REFLECTION_INITIAL_MOCK_STATE, action);

        expect(actual).toEqual(expected);
    });
});

describe ('Reflection Reducer', () => {
    it('should set the loading key to true on `loadReflections`', () => {
        const action = loadReflections();
        const expected: ReflectionState = {
            ...REFLECTION_INITIAL_MOCK_STATE,
            loading: true
        };

        const actual = reflectionReducer(REFLECTION_INITIAL_MOCK_STATE, action);

        expect(actual).toEqual(expected);
    });
});


describe ('Reflection Reducer', () => {
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

        const expected: ReflectionState = {
            ...REFLECTION_INITIAL_MOCK_STATE,
            reflections: reflections
        };

        const actual = reflectionReducer(REFLECTION_INITIAL_MOCK_STATE, action);

        expect(actual).toEqual(expected);
    });
});

describe ('Reflection Reducer', () => {
    it('should set the loading key to false on `loadReflectionsFailure`', () => {
        const action = loadReflectionsFailure({ error: "Failure"});
        const expected: ReflectionState = {
            ...REFLECTION_INITIAL_MOCK_STATE,
            loading: false
        };

        const actual = reflectionReducer(REFLECTION_INITIAL_MOCK_STATE, action);

        expect(actual).toEqual(expected);
    });
});