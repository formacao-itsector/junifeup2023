import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles/global.css';
import { ReactBasics } from './screens';
import { Header } from './components';

const App = () => {
  return (
    <div className="flex flex-col items-center mb-12">
      {/* TODO: 
        Ideia seria cada Page ser fórum like, como a documentação 
          que encontramos em diferentes websites. 
          Onde todos os topics que vamos falar estão numa página estatica onde simplesmente vamos dando scroll aos temas.
      */}
      <Header classTitle={'React Basics'} />
      <ReactBasics />
    </div>
  );
};

// o createroot necessita que lhe seja passado um container de HTML onde ele possa montar o codigo React, neste caso
// dizemos para usar a div com o id "root" para esse efeito (encontrada no ficheiro /public/template.html), não
// existindo ele cria uma com o mesmo nome

createRoot((document.getElementById('root') as HTMLElement) || document.createElement('root')).render(<App />);
