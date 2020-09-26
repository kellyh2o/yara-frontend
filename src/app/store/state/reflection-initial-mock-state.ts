import { ReflectionState } from '../models/reflection-state.model';
import { ReflectionType } from 'src/app/services/reflection-response.model';
import { Guid } from 'guid-typescript';

export const REFLECTION_INITIAL_MOCK_STATE: ReflectionState = {
    reflection: {
        title: 'Morning Reflection',
        text: 'Beautiful sunrise this morning.',
        type: ReflectionType.Open,
        createdAt: new Date(2020, 5, 27, 0, 0, 0, 0),
        id: Guid.createEmpty()
    },
    loading: false,
    loaded: false
}