import { LanguageEnum, ThemeEnum } from '@types';

export enum Actions {
  SWITCH_THEME = 'SWITCH_THEME',
  SWITCH_LANGUAGE = 'SWITCH_LANGUAGE',
}
export interface ReduxExampleState {
  theme: ThemeEnum;
  language: LanguageEnum;
}
