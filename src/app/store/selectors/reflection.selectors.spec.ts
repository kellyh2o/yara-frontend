import { getShowReflections, getShowNewReflectionForm } from './reflection.selectors';
import { REFLECTION_INITIAL_MOCK_STATE } from '../state/reflection-initial-mock-state';

const state = REFLECTION_INITIAL_MOCK_STATE;

describe('Reflection selectors', () => {
    it('should retrieve showReflections', () => {
        expect(getShowReflections.projector(state)).toBe(state.showReflections);    });
    
    it('should retrieve showNewReflectionForm', () => {
        expect(getShowNewReflectionForm.projector(state)).toBe(!state.showReflections);
    });
});