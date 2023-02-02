import React, { useState } from 'react';
import { NamedExportButton as NamedExportBtn } from '../'; //Opt-in Aliasing import
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
// import DefaultExportedButton from '../button/button';
import { duotoneDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { ExternalLinkIcon, TriangleDownIcon } from '@radix-ui/react-icons';
import { codeSnippets } from '../../reactSyntaxHighlighter';

export const TypesOfExports: React.FC = () => {
  const [isNamedSnippetVisible, setIsNamedSnippetVisible] =
    useState<boolean>(false);

  const handleNamedSnippetVisibilityOnClick = () => {
    setIsNamedSnippetVisible(!isNamedSnippetVisible);
  };

  return (
    <div className="">
      <a
        href="https://betterprogramming.pub/understanding-the-difference-between-named-and-default-exports-in-react-2d253ca9fc22"
        className="text-2xl w-fit mb-2 transition-all hover:text-violet-600 "
      >
        <div className="flex flex-row">
          Named Vs. Default Exports <ExternalLinkIcon />
        </div>
      </a>
      <div className="gap-3 max-w-5xl flex items-start justify-center transition-all flex-col mt-5 md:flex-row md:items-center md:mt-0">
        {!isNamedSnippetVisible ? (
          <TriangleDownIcon
            className="w-12 h-12 animate-bounce hover:cursor-pointer"
            onClick={handleNamedSnippetVisibilityOnClick}
          />
        ) : (
          <div className="grid ">
            <SyntaxHighlighter
              language="tsx"
              style={duotoneDark}
              wrapLines
              wrapLongLines
              showLineNumbers
              className="rounded"
            >
              {codeSnippets.NamedExportButtonSyntax}
            </SyntaxHighlighter>
            <NamedExportBtn
              onClick={handleNamedSnippetVisibilityOnClick}
              label={'Hide Snippet'}
            />
          </div>
        )}
      </div>
      {/* <div className="px-40 py-8 gap-3 flex justify-center items-center flex-col md:flex-row  border-2 border-violet-800">
        <DefaultExportedButton />
      </div> */}
    </div>
  );
};
