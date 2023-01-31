import React from 'react';
import { createRoot } from 'react-dom/client';

const App = () => {
  return <>HELLO WORLD</>;
};

createRoot(
  (document.getElementById('root') as HTMLElement) ||
    document.createElement('root')
).render(<App />);
