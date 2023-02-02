import React from 'react';
import { Header, TypesOfExports } from '../../components';

export const ReactBasics: React.FC = () => {
  return (
    <div className="flex flex-col items-center">
      <Header classTitle={'React Basics'} />

      <TypesOfExports />
    </div>
  );
};
