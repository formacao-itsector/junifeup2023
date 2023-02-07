import React from 'react';
import { Prism } from 'react-syntax-highlighter';
import { duotoneDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';

interface CodeSnippetProps {
  snippet: string;
}

export const CodeSnippet: React.FC<CodeSnippetProps> = ({ snippet }) => {
  return (
    <Prism language="tsx" style={duotoneDark} wrapLines wrapLongLines showLineNumbers className="rounded">
      {snippet}
    </Prism>
  );
};
