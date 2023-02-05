import { Paths } from '@types';

export interface CoreStoreState {
  current_path: Paths;
}

export interface CoreStoreActions {
  set_current_path(p: Paths): void;
}

export interface CoreStore extends CoreStoreState, CoreStoreActions {}
