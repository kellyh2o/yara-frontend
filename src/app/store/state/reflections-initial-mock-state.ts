import { ReflectionsState } from '../models/reflections-state.model';
import { REFLECTION_INITIAL_MOCK_STATE } from './reflection-initial-mock-state';

export const REFLECTIONS_INITIAL_MOCK_STATE: ReflectionsState = {
    showReflections: true,
    reflections: [REFLECTION_INITIAL_MOCK_STATE.reflection],
    loading: false,
    loaded: false
};
