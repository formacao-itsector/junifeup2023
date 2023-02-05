import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ReactAdvanced, ReactBasics, ReactHooks, ReactState, ReactTypescript, Structure } from '@screens';
import { PathListener } from '@components';
import { Paths } from '@types';
import './lib/styles/global.css';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={Paths.root} element={<Structure />}>
          <Route path={Paths.reactBasics} element={<ReactBasics />} />
          <Route path={Paths.reactTypescript} element={<ReactTypescript />} />
          <Route path={Paths.reactHooks} element={<ReactHooks />} />
          <Route path={Paths.reactState} element={<ReactState />} />
          <Route path={Paths.reactAdvanced} element={<ReactAdvanced />} />
        </Route>
      </Routes>
      <PathListener />
    </BrowserRouter>
  );
};

// o createroot necessita que lhe seja passado um container de HTML onde ele possa montar o codigo React, neste caso
// dizemos para usar a div com o id "root" para esse efeito (encontrada no ficheiro /public/template.html), não
// existindo ele cria uma com o mesmo nome

createRoot((document.getElementById('root') as HTMLElement) || document.createElement('root')).render(<App />);
