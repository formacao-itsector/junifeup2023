import React from 'react';
import { NamedExportButton as NamedExportBtn, SectionLink, TriangleButton } from '../../'; //Opt-in Aliasing import
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import DefaultExportedButton from '../button/button';
import { duotoneDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { useTypesOfExportsHelper } from './typesOfExports.helper';

export const TypesOfExports: React.FC = () => {
  const {
    areSnippetsVisible,
    handleSnippetsVisibilityOnClick,
    handleNextSnippetOnClick,
    isNextSnippetVisible,
    codeSnippets,
  } = useTypesOfExportsHelper();

  return (
    <div>
      <SectionLink
        label="Named Vs. Default Exports"
        href="https://betterprogramming.pub/understanding-the-difference-between-named-and-default-exports-in-react-2d253ca9fc22"
        hasIcon
      />

      <div className="gap-3 flex items-center justify-center transition-all flex-col md:flex-row">
        {!areSnippetsVisible ? (
          <TriangleButton triangleUp={false} onClick={handleSnippetsVisibilityOnClick} />
        ) : (
          <div className="flex flex-col items-center">
            <div className="grid w-3xl h-3xl">
              <SyntaxHighlighter
                language="tsx"
                style={duotoneDark}
                wrapLines
                wrapLongLines
                showLineNumbers
                className="md:min-w-[44rem] md:max-w-[44rem] rounded"
              >
                {codeSnippets.NamedExportButtonSyntax}
              </SyntaxHighlighter>
            </div>
            {!isNextSnippetVisible && (
              <div className="w-full">
                <NamedExportBtn onClick={handleNextSnippetOnClick} label={'Next Snippet'} />
              </div>
            )}
          </div>
        )}
      </div>
      <div className="gap-3 flex items-center justify-center transition-all flex-col md:flex-row">
        {areSnippetsVisible && isNextSnippetVisible && (
          <div className="flex flex-col items-center">
            <div className="grid w-3xl h-3xl">
              <SyntaxHighlighter
                language="tsx"
                style={duotoneDark}
                wrapLines
                wrapLongLines
                showLineNumbers
                className="md:min-w-[44rem] md:max-w-[44rem] rounded"
              >
                {codeSnippets.DefaultExportButtonSyntax}
              </SyntaxHighlighter>
              <DefaultExportedButton onClick={handleSnippetsVisibilityOnClick} label={'Close Snippets'} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
