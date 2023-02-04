import { useSelector } from 'react-redux';
import { StoreState } from '../../store';
import { LanguageEnum, ThemeEnum } from '../context';

export const useThemeState = (): ThemeEnum => useSelector((state: StoreState) => state.reduxExample.theme);

export const useLanguageState = (): LanguageEnum => useSelector((state: StoreState) => state.reduxExample.language);
