import { ReflectionState } from './reflection-state.model';
import { ReflectionType } from 'src/app/services/reflection-response.model';
import { Guid } from 'guid-typescript';
import { AbstractFormGroupDirective } from '@angular/forms';
import { Reflection } from '../models/reflection.model';

export const MOCK_REFLECTION: Reflection = {
    _id: Guid.createEmpty().toString(),
    title: 'Morning Reflection',
    text: 'Beautiful sunrise this morning.',
    type: ReflectionType.Open,
    createdAt: new Date(2020, 5, 27, 0, 0, 0, 0),
}

export const REFLECTION_INITIAL_MOCK_STATE: ReflectionState = {
    reflection: MOCK_REFLECTION,
    loading: false,
    loaded: false
}