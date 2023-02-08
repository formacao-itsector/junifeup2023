import { Blog } from '@components';
import React from 'react';
import { useReactPropsStateHelper } from './reactPropsState.helper';

export const ReactPropsState: React.FC = () => {
  const { articles, handleArticleVisibilityOnClick } = useReactPropsStateHelper();
  return (
    <div className="flex flex-col items-center gap-16 mb-40">
      <div className="mx-2 md:mx-0">
        <Blog blogEntries={articles} handleArticleVisibilityOnClick={handleArticleVisibilityOnClick} />
      </div>
    </div>
  );
};
