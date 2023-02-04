import React, { useContext } from 'react';
// import { useTypesOfExportsHelper } from '../../../../components/reactBasics/typesOfExports/typesOfExports.helper';
// import { SectionLink, TriangleButton, NamedExportButton as NamedExportBtn } from '../../../../components';
import { useContextelper, ThemeEnum, LanguageEnum } from '../../../../hooks';
// import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
// import { duotoneDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
// import DefaultExportedButton from '../../../../components/reactBasics/button/button';

export const ContextTab: React.FC = () => {
  //hooks
  const { userThemeSwitch, userLanguageSwitch, ThemeContext, LanguageContext } = useContextelper();
  const userTheme = useContext(ThemeContext);
  const userLanguage = useContext(LanguageContext);

  //flags
  const isLightMode = userTheme === ThemeEnum.Light;
  const isPT = userLanguage === LanguageEnum.PT;

  //body colors
  const bodyElement = document.body;
  bodyElement.style.background = isLightMode ? 'white' : 'rgb(24, 24, 27)';
  bodyElement.style.color = isLightMode ? 'black' : 'white';

  // const {
  //   areSnippetsVisible,
  //   handleSnippetsVisibilityOnClick,
  //   handleNextSnippetOnClick,
  //   isNextSnippetVisible,
  //   codeSnippets,
  // } = useTypesOfExportsHelper();

  //JSX
  return (
    <div>
      {/* <div className=" flex items-center justify-center">
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
      </div> */}

      <div className="w-screen h-screen flex flex-col">
        <div className="flex justify-center items-center gap-x-32 my-8">
          <span className="font-Figtree">{isPT ? 'Exemplo de context:' : 'Context example:'}</span>

          <button
            onClick={() => {
              userThemeSwitch();
              userLanguageSwitch();
            }}
            className="border-2 border-violet-700 rounded-3xl font-bold text-lg px-[2.5rem] py-2 flex items-center justify-center transition-all hover:px-[2rem] hover:border-violet-700 focus:bg-violet-700"
          >
            {isPT ? 'Clica em mim!' : 'Click on me!'}
          </button>
        </div>
      </div>
    </div>
  );
};
