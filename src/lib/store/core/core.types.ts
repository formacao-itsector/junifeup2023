import { LanguageEnum, Paths, ThemeEnum } from '@types';

export interface CoreStoreState {
  current_path: Paths;
  theme: ThemeEnum;
  language: LanguageEnum;
}

export interface CoreStoreActions {
  set_current_path(p: Paths): void;
  switch_theme: () => void;
  switch_language: () => void;
}

export interface CoreStore extends CoreStoreState, CoreStoreActions {}
