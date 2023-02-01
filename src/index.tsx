import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles/global.css';
import { ReactBasics } from './screens';

const App = () => {
  return (
    <div className="bg-zinc-900 font-Figtree text-white font-bold">
      {/* TODO: 
        Ideia seria cada Page ser fórum like, como a documentação 
          que encontramos em diferentes websites. 
          Onde todos os topics que vamos falar estão numa página estatica onde simplesmente vamos dando scroll aos temas.
      */}
      <ReactBasics />
    </div>
  );
};

// o createroot necessita que lhe seja passado um container de HTML onde ele possa montar o codigo React, neste caso
// dizemos para usar a div com o id "root" para esse efeito (encontrada no ficheiro /public/template.html), não
// existindo ele cria uma com o mesmo nome

createRoot(
  (document.getElementById('root') as HTMLElement) ||
    document.createElement('root')
).render(<App />);
