import { Blog } from '@components';
import React from 'react';
import { useReactTypescriptHelper } from './reactTypescript.helper';

export const ReactTypescript: React.FC = () => {
  const { articles, handleArticleVisibilityOnClick } = useReactTypescriptHelper();
  return (
    <div className="flex flex-col items-center gap-16 mb-40">
      <div className="mx-2 md:mx-0">
        <Blog blogEntries={articles} handleArticleVisibilityOnClick={handleArticleVisibilityOnClick} />
      </div>
    </div>
  );
};
