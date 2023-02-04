import React from 'react';
import { useDispatch } from 'react-redux';
import { switchLanguage, switchTheme } from '../../../../store/reduxExample/action';
import { LanguageEnum, ThemeEnum, useLanguageState, useThemeState } from '../../../../hooks';

export const ReduxTab: React.FC = () => {
  //hooks
  const dispatch = useDispatch();
  const theme = useThemeState();
  const language = useLanguageState();

  //Flags
  const isLightMode = theme === ThemeEnum.Light;
  const isPT = language === LanguageEnum.PT;

  //Body colors
  const bodyElement = document.body;
  bodyElement.style.background = isLightMode ? 'white' : 'rgb(24, 24, 27)';
  bodyElement.style.color = isLightMode ? 'black' : 'white';

  //JSX
  return (
    <div className="w-screen h-screen flex flex-col">
      <div className="flex justify-center items-center gap-x-32 my-8">
        <span className="font-Figtree">{isPT ? 'Exemplo de redux:' : 'Redux example:'}</span>

        <button
          onClick={() => {
            dispatch(switchTheme());
            dispatch(switchLanguage());
          }}
          className="border-2 border-violet-700 rounded-3xl font-bold text-lg px-[2.5rem] py-2 flex items-center justify-center transition-all hover:px-[2rem] hover:border-violet-700 focus:bg-violet-700"
        >
          {isPT ? 'Clica em mim!' : 'Click on me!'}
        </button>
      </div>
    </div>
  );
};
