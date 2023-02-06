import { LanguageEnum, ThemeEnum } from '@types';
import { useSelector } from 'react-redux';
import { ReduxStoreState } from '@store';

export const useThemeState = (): ThemeEnum => useSelector((state: ReduxStoreState) => state.reduxExample.theme);

export const useLanguageState = (): LanguageEnum =>
  useSelector((state: ReduxStoreState) => state.reduxExample.language);
