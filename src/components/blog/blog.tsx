import React from 'react';
import { BlogTypography, BlogComponents, TriangleButton } from '../../components';

interface BlogProps {
  blogEntries: BlogPostProps[];
  handleArticleVisibilityOnClick: (id: string) => void;
}
export interface BlogPostProps {
  id: string;
  title?: string;
  content?: string | React.ReactNode;
  children?: React.ReactNode;
  visibility?: boolean;
}

export const Blog: React.FC<BlogProps> = ({ blogEntries, handleArticleVisibilityOnClick }) => {
  return (
    <div className="flex flex-col gap-3">
      {blogEntries.map((entry) => {
        return (
          <>
            <div className="flex flex-row">
              {entry.title && <BlogComponents.Section content={entry.title} />}
              <TriangleButton onClick={() => handleArticleVisibilityOnClick(entry.id)} triangleUp={!entry.visibility} />
            </div>
            {entry.visibility && (
              <div className="flex flex-row">
                <div className="w-[1px] rounded bg-zinc-600 ml-[0.38rem]" />

                <div className="flex flex-col max-w-xl gap-3 ml-10 border-b border-zinc-600 py-3 w-full">
                  <div key={entry.id}>
                    {entry.title && <BlogTypography.Title content={entry.title} />}
                    {entry.content && <BlogTypography.Text content={entry.content} />}
                    {entry.children && entry.children}
                  </div>
                </div>
              </div>
            )}
          </>
        );
      })}
    </div>
  );
};
