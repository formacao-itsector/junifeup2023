import React from 'react';
import { NamedExportButton as NamedExportBtn } from '../'; //Opt-in Aliasing import
import DefaultExportedButton from '../button/button';

export const TypesOfExports: React.FC = () => {
  return (
    <div className="h-1/2 w-screen flex justify-center items-center gap-x-32">
      <NamedExportBtn />
      <DefaultExportedButton />
    </div>
  );
};
