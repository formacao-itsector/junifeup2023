import React from 'react';
import { useReactBasicsHelper } from './reactBasics.helper';
import { Blog } from '@components';

export const ReactBasics: React.FC = () => {
  const { articles, handleArticleVisibilityOnClick } = useReactBasicsHelper();
  return (
    <div className="flex flex-col items-center gap-16 mb-40">
      <div className="mx-2 md:mx-0">
        <Blog blogEntries={articles} handleArticleVisibilityOnClick={handleArticleVisibilityOnClick} />
      </div>
    </div>
  );
};
