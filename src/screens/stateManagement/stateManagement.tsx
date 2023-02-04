import React, { useContext } from 'react';
import { useContextelper, ThemeEnum, LanguageEnum } from '../../hooks';
import { Header } from '../../components/header';

export const StateManagement: React.FC = () => {
  const { themeSwitch, languageSwitch, ThemeContext, LanguageContext } =
    useContextelper();

  const userTheme = useContext(ThemeContext);
  const userLanguage = useContext(LanguageContext);

  const isDarkMode = userTheme === ThemeEnum.Dark;
  const isPT = userLanguage === LanguageEnum.PT;

  return (
    <div className="bg-zinc-900 w-screen h-screen flex flex-col">
      <Header classTitle="State Management" />

      <div
        className={`${
          userTheme === ThemeEnum.Dark ? 'bg-zinc-900' : 'bg-zinc-100'
        } ${
          isDarkMode ? 'text-white' : 'text-black'
        } h-1/4 w-screen flex justify-center items-center gap-x-32 my-8`}
      >
        <span>{isPT ? 'Exemplo de context:' : 'Context example:'}</span>

        <button
          onClick={() => {
            themeSwitch();
            languageSwitch();
          }}
          className="border-2 border-violet-700 rounded-3xl font-bold text-lg px-[2.5rem] py-2 flex items-center justify-center transition-all hover:px-[2rem] hover:border-violet-700 focus:bg-violet-700"
        >
          {isPT ? 'Clica em mim!' : 'Click on me!'}
        </button>
      </div>
    </div>
  );
};
