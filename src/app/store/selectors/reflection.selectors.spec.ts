import { getReflections, getReflectionsLoaded, getSelectedReflection, getShowReflections, getShowNewReflectionForm, getSelectedReflectionId } from './reflection.selectors';
import { REFLECTIONS_INITIAL_MOCK_STATE } from '../state/reflections-initial-mock-state';
import { REFLECTION_INITIAL_MOCK_STATE } from '../state/reflection-initial-mock-state';
import { Guid } from 'guid-typescript';

const reflectionsState = REFLECTIONS_INITIAL_MOCK_STATE;
const reflectionState = REFLECTION_INITIAL_MOCK_STATE;

describe('Reflection selectors', () => {
    it('should retrieve showReflections from ReflectionsState', () => {
        expect(getShowReflections.projector(reflectionsState)).toBe(reflectionsState.showReflections);    });
    
    it('should retrieve showNewReflectionForm from ReflectionsState', () => {
        expect(getShowNewReflectionForm.projector(reflectionsState)).toBe(!reflectionsState.showReflections);
    });

    it('should retrieve reflections from ReflectionsState', () => {
        expect(getReflections.projector(reflectionsState)).toBe(reflectionsState.reflections);
    });

    it('should retrieve loaded from ReflectionsState', () => {
        expect(getReflectionsLoaded.projector(reflectionsState)).toBe(reflectionsState.loaded);
    });

    it('should retrieve selectedReflection from ReflectionState', () => {
        expect(getSelectedReflection.projector(reflectionState)).toBe(reflectionState.reflection);
    });
});