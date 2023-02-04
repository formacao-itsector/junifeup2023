import React, { useState } from 'react';

// 1)Intro
// O uso do context torna-se ideal para guardar informação que não precise de ser muitas vezes atualizada
// e que essa informação idealmente seja utilizada em qualquer componente da nossa aplicação.
// exemplos de uso: theme; user data(auth); location-specific (lang / locale)

//2)O que trás de benéfico?
// Resolve o problema de prop drilling uma vez que o theme pode ser acedido em qualquer componente da tree
// sem ter de passar props pelos childs

//3) Como se usa React context? Uma vez que ele já vem nativamente do React é bastante simples!
//3.1). Criar o context usando o método “createContext”
//3.2). Usar o context provider criado e dar wrap à nossa component tree
//3.3) Passar qualquer valor que nos convenha usando a prop value do provider
//3.4). Ler os valores passados recorrendo ao context consumer

//4) React Context substitui o uso de outras ferramentas de gestão de state(ex: Redux/Zustand)?
// Sim e não; Se não fizermos grande atualização de dados pode ser viável, mas tipicamente para aplicações mais complexas não.

export enum ThemeEnum {
  Light = 'Light',
  Dark = 'Dark',
}

export enum LanguageEnum {
  PT = 'pt',
  EN = 'en',
}

export interface UseContextOutput {
  ThemeContext: React.Context<ThemeEnum>;
  LanguageContext: React.Context<LanguageEnum>;
  userThemeSwitch: () => void;
  userLanguageSwitch: () => void;
  currentTheme: ThemeEnum;
  currentLanguage: LanguageEnum;
}

export const useContextelper = (): UseContextOutput => {
  const [currentTheme, setCurrentTheme] = useState(ThemeEnum.Dark);
  const [currentLanguage, setCurrenLanguage] = useState(LanguageEnum.EN);

  //Theme Context
  const ThemeContext = React.createContext(currentTheme);
  //Language Context
  const LanguageContext = React.createContext(currentLanguage);

  const userThemeSwitch = () => {
    setCurrentTheme(currentTheme === ThemeEnum.Light ? ThemeEnum.Dark : ThemeEnum.Light);
  };

  const userLanguageSwitch = () => {
    setCurrenLanguage(currentLanguage === LanguageEnum.PT ? LanguageEnum.EN : LanguageEnum.PT);
  };

  return {
    ThemeContext,
    userThemeSwitch,
    LanguageContext,
    userLanguageSwitch,
    currentTheme,
    currentLanguage,
  };
};
