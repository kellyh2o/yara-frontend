import { Reflection } from '../models/reflection.model';

export interface ReflectionsState {
    readonly showReflections: boolean;
    readonly reflections: Reflection[];
    readonly loading?: boolean;
    readonly loaded?: boolean;
  }
  