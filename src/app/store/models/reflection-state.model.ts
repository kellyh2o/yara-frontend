import { Reflection } from 'src/app/models/reflection.model';

export interface ReflectionState {
    readonly showReflections: boolean;
    readonly reflections: Reflection[];
    readonly loading: boolean;
  }
  