import React from 'react';
import { Blog, TypesOfExports } from '../../components';

export const ReactBasics: React.FC = () => {
  return (
    <div className="mx-2 md:mx-0">
      <TypesOfExports />
      <Blog />
    </div>
  );
};
