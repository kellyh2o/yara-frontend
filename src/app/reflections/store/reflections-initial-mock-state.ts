import { MOCK_REFLECTION } from './reflection-initial-mock-state';
import { ReflectionsState } from './reflections-state.model';

export const REFLECTIONS_INITIAL_MOCK_STATE: ReflectionsState = {
    showReflections: true,
    reflections: [MOCK_REFLECTION],
    loading: false,
    loaded: false
};
