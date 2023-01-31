import React from 'react';
import { createRoot } from 'react-dom/client';

const App = () => {
  return <>HELLO WORLD</>;
};

// o createroot necessita que lhe seja passado um container de HTML onde ele possa montar o codigo React, neste caso
// dizemos para usar a div com o id "root" para esse efeito (encontrada no ficheiro /public/template.html), não
// existindo ele cria uma com o mesmo nome

createRoot(
  (document.getElementById('root') as HTMLElement) ||
    document.createElement('root')
).render(<App />);
