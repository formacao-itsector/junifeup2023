import React from 'react';
import { Header, TypesOfExports } from '../../components';

export const ReactBasics: React.FC = () => {
  return (
    <div className="w-screen h-screen flex flex-col">
      <Header classTitle={'React Basics'} />

      <TypesOfExports />
    </div>
  );
};
