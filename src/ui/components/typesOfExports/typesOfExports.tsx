import React from 'react';
import { Prism as CodePreview } from 'react-syntax-highlighter'; //Opt-in Aliasing import
import { duotoneDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { codeSnippets } from '@utils';
import { Button } from '@components';

export const ExportedName: React.FC = () => {
  return (
    <div className="gap-3 flex items-center justify-center transition-all flex-col md:flex-row w-full">
      <div className="w-full flex flex-col items-center">
        <div className="w-full grid w-3xl h-3xl">
          <CodePreview language="tsx" style={duotoneDark} wrapLines wrapLongLines showLineNumbers className="rounded">
            {codeSnippets.NamedExportButtonSyntax}
          </CodePreview>
        </div>
        <div className="w-full">
          <Button label={'Button'} />
        </div>
      </div>
    </div>
  );
};

const ExportedDefault = () => {
  return (
    <div className="gap-3 flex items-center justify-center transition-all flex-col md:flex-row w-full">
      <div className="w-full flex flex-col items-center">
        <div className="w-full grid w-3xl h-3xl">
          <CodePreview language="tsx" style={duotoneDark} wrapLines wrapLongLines showLineNumbers className="rounded">
            {codeSnippets.DefaultExportButtonSyntax}
          </CodePreview>
        </div>
        <div className="w-full">
          <Button label={'Button'} />
        </div>
      </div>
    </div>
  );
};

export default ExportedDefault;
