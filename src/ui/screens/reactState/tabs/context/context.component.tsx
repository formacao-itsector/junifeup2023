import { useContextelper } from '@hooks';
import { LanguageEnum, ThemeEnum } from '@types';
import React, { useContext } from 'react';

export const ContextTab: React.FC = () => {
  //hooks
  const { userThemeSwitch, userLanguageSwitch, ThemeContext, LanguageContext } = useContextelper();
  const userTheme = useContext(ThemeContext);
  const userLanguage = useContext(LanguageContext);

  //flags
  const isLightMode = userTheme === ThemeEnum.Light;
  const isPT = userLanguage === LanguageEnum.PT;

  //body colors
  const bodyElement = document.body;
  bodyElement.style.background = isLightMode ? 'white' : 'rgb(24, 24, 27)';
  bodyElement.style.color = isLightMode ? 'black' : 'white';

  //JSX
  return (
    <div>
      <div className="w-screen h-screen flex flex-col">
        <div className="flex flex-col justify-center items-center gap-3 my-8">
          <span className="font-bold text-lg">{isPT ? 'Exemplo de context:' : 'Context example:'}</span>

          <button
            onClick={() => {
              userThemeSwitch();
              userLanguageSwitch();
            }}
            className="border-2 border-violet-700 rounded-3xl font-bold text-lg px-[2.5rem] py-2 flex items-center justify-center transition-all hover:px-[2rem] hover:border-violet-700 focus:bg-violet-700"
          >
            {isPT ? 'Clica em mim!' : 'Click on me!'}
          </button>
        </div>
      </div>
    </div>
  );
};
