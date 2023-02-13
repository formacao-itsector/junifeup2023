import { Blog } from '@components';
import React from 'react';
import { useReactHooksHelper } from './reactHooks.helper';

export const ReactHooks: React.FC = () => {
  const { articles, handleArticleVisibilityOnClick } = useReactHooksHelper();
  return (
    <div className="flex flex-col items-center gap-16 mb-40">
      <div className="mx-2 md:mx-0">
        <Blog blogEntries={articles} handleArticleVisibilityOnClick={handleArticleVisibilityOnClick} />
      </div>
    </div>
  );
};
