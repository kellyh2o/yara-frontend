import { ReflectionState } from '../models/reflection-state.model';
import { createNewReflection, cancelNewReflection, saveNewReflection } from '../actions/reflection.actions';
import { REFLECTION_INITIAL_MOCK_STATE } from '../state/reflection-initial-mock-state';
import { reflectionReducer } from './reflection.reducer';

describe('Reflection Reducer', () => {
    it('should set the showReflections key to false on `createNewReflection`', () => {
        const action = createNewReflection();
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