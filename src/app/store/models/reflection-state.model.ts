import { Reflection } from '../../models/reflection.model';

export interface ReflectionState {
    readonly reflection: Reflection;
    readonly loading: boolean;
    readonly loaded: boolean;
  }
  