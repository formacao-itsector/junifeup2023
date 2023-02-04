import { LanguageEnum, ThemeEnum } from '../../hooks';
import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

//1) Zustand é uma alternativa ao redux que se tem provado:
// Mais simples!
// Mais leve!

//2) Como usar o Zustand?
// Para usar o zustand apenas precisamos de instalar o pacote "zustand"

//2.1) Exemplo de uso:
export interface ZustandState {
  theme: ThemeEnum;
  language: LanguageEnum;
  switchTheme?: () => void;
  switchLanguage?: () => void;
}

export const useZustandStore = create<ZustandState>()(
  devtools(
    persist(
      (set) => ({
        theme: ThemeEnum.Dark,
        language: LanguageEnum.EN,
        switchTheme: () =>
          set((state: ZustandState) => ({ theme: state?.theme === ThemeEnum.Dark ? ThemeEnum.Light : ThemeEnum.Dark })),
        switchLanguage: () =>
          set((state: ZustandState) => ({
            language: state?.language === LanguageEnum.EN ? LanguageEnum.PT : LanguageEnum.EN,
          })),
      }),
      {
        name: 'zustand-storage',
      }
    )
  )
);
