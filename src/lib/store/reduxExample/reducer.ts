import { LanguageEnum, ThemeEnum } from '@types';
import { AnyAction } from 'redux';
import { Actions, ReduxExampleState } from './types';

export const reduxExampleInitialState = { theme: ThemeEnum.Dark, language: LanguageEnum.EN };

export const reduxExampleReducer = (state = reduxExampleInitialState, action: AnyAction): ReduxExampleState => {
  switch (action.type) {
    case Actions.SWITCH_THEME: {
      return { ...state, theme: state?.theme === ThemeEnum.Dark ? ThemeEnum.Light : ThemeEnum.Dark };
    }
    case Actions.SWITCH_LANGUAGE: {
      return { ...state, language: state?.language === LanguageEnum.EN ? LanguageEnum.PT : LanguageEnum.EN };
    }
    default:
      return state;
  }
};
