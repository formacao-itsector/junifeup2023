import React from 'react';
import { Blog } from '../../components';
import { useReactBasicsHelper } from './reactBasics.helper';

export const ReactBasics: React.FC = () => {
  const { articles, handleArticleVisibilityOnClick } = useReactBasicsHelper();
  return (
    <div className="mx-2 md:mx-0">
      <Blog blogEntries={articles} handleArticleVisibilityOnClick={handleArticleVisibilityOnClick} />
    </div>
  );
};
