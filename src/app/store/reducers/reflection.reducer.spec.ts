import { ReflectionState } from '../models/reflection-state.model';
import { addReflection, cancelNewReflection, saveNewReflection, loadReflections, loadReflectionsSuccess, loadReflectionsFailure, loadReflection, loadReflectionSuccess } from '../actions/reflection.actions';
import { REFLECTION_INITIAL_MOCK_STATE } from '../state/reflection-initial-mock-state';
import { reflectionReducer } from './reflection.reducer';


describe('Reflection Reducer', () => {
    it('should start loading reflections on `loadReflection`', () => {
        const action = loadReflection({ reflectionId: REFLECTION_INITIAL_MOCK_STATE.reflection._id });
        const expected: ReflectionState = {
            ...REFLECTION_INITIAL_MOCK_STATE,
            loading: true,
        };
        const actual = reflectionReducer(REFLECTION_INITIAL_MOCK_STATE, action);
        expect(actual).toEqual(expected);
    });

    it('should set the reflection key successfully on `loadReflectionSuccess`', () => {
        const action = loadReflectionSuccess({
            reflection: REFLECTION_INITIAL_MOCK_STATE.reflection,
        });
        const expected: ReflectionState = {
            ...REFLECTION_INITIAL_MOCK_STATE,
            loading: false,
            loaded: true,
        };

        const actual = reflectionReducer(REFLECTION_INITIAL_MOCK_STATE, action);

        expect (actual).toEqual(expected);
    });

    it('should set the loading key to false on `loadReflectionSuccess`', () => {
        const action = loadReflectionSuccess({
            reflection: REFLECTION_INITIAL_MOCK_STATE.reflection,
        });
        const expected: ReflectionState = {
            ...REFLECTION_INITIAL_MOCK_STATE,
            loading: false,
            loaded: true,
        };

        const actual = reflectionReducer(REFLECTION_INITIAL_MOCK_STATE, action);

        expect (actual).toEqual(expected);
    });

    it('should set the loaded key to true on `loadReflectionSuccess`', () => {
        const action = loadReflectionSuccess({
            reflection: REFLECTION_INITIAL_MOCK_STATE.reflection,
        });
        const expected: ReflectionState = {
            ...REFLECTION_INITIAL_MOCK_STATE,
            loading: false,
            loaded: true,
        };

        const actual = reflectionReducer(REFLECTION_INITIAL_MOCK_STATE, action);

        expect (actual).toEqual(expected);
    });

    it('should set the loading key to false on `loadReflectionsFailure`', () => {
        const action = loadReflectionsFailure({ error: 'error'});
        const expected: ReflectionState = {
            ...REFLECTION_INITIAL_MOCK_STATE,
            loading: false,
            loaded: false,
        };

        const actual = reflectionReducer(REFLECTION_INITIAL_MOCK_STATE, action);

        expect (actual).toEqual(expected);
    });

    it('should set the loaded key to false on `loadReflectionsFailure`', () => {
        const action = loadReflectionsFailure({ error: 'error'});
        const expected: ReflectionState = {
            ...REFLECTION_INITIAL_MOCK_STATE,
            loading: false,
            loaded: false,
        };

        const actual = reflectionReducer(REFLECTION_INITIAL_MOCK_STATE, action);

        expect (actual).toEqual(expected);
    });
});
