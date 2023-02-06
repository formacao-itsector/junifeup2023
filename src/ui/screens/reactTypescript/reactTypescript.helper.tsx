import React, { useCallback, useState } from 'react';
import { BlogPostProps, BlogTypography } from '@components';
import { Prism as CodePreview } from 'react-syntax-highlighter';
import { codeSnippets } from '@utils';
import { duotoneDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export const useReactTypescriptHelper = () => {
  const [articles, setArticles] = useState<BlogPostProps[]>([
    {
      id: '1',
      title: 'O que é Javascript?',
      content:
        'Javascript é uma das linguagens de programação mais populares da atualidade. É capaz de ser interpretada pelo Browser, do lado do cliente, ou do lado do servidor o que torna possível a construção de aplicações web, usando apenas Javascript.',

      visibility: true,
    },
    {
      id: '2',
      title: 'O que é Typescript?',
      content:
        'TypeScript é uma linguagem de programação que assenta na linguagem JavaScript, o que significa que todo código JavaScript é válido em TypeScript. É fortemente tipado, o que significa que as variáveis ​​e os tipos de dados precisam ser declarados antes de serem usados. Esta tipagem faz com que seja uma linguagem de programação com menos liberdade em termos de Typos o que permite melhor controlo do código que está a ser desenvolvido. Ele é compilado para JavaScript puro, tornando-o compatível com todos os navegadores e ambientes que suportam JavaScript. TypeScript é amplamente utilizado para desenvolvimento de aplicações web e é mantido como um projeto open-source pela Microsoft.',
      visibility: true,
    },
    {
      id: '3',
      title: 'Javascript Vs Typescript',
      children: (
        <div className="leading-snug pt-3 gap-3">
          <div className="mb-6">
            <BlogTypography.Subtitle content="Javascript Example" />
            <CodePreview language="jsx" style={duotoneDark} wrapLines wrapLongLines showLineNumbers className="rounded">
              {codeSnippets.JavascriptExample}
            </CodePreview>
          </div>
          <div>
            <BlogTypography.Subtitle content="Typescript Example" />
            <CodePreview language="tsx" style={duotoneDark} wrapLines wrapLongLines showLineNumbers className="rounded">
              {codeSnippets.TypescriptExample}
            </CodePreview>
          </div>
        </div>
      ),
      visibility: true,
    },
    {
      id: '4',
      title: 'React Components',
      children: (
        <div className="leading-snug pt-3 gap-3">
          <div className="mb-6">
            <BlogTypography.Subtitle content="React Javascript Component" />
            <CodePreview language="jsx" style={duotoneDark} wrapLines wrapLongLines showLineNumbers className="rounded">
              {codeSnippets.ReactJavascriptComponentExample}
            </CodePreview>
          </div>
          <div>
            <BlogTypography.Subtitle content="React Typescript Component" />
            <CodePreview language="tsx" style={duotoneDark} wrapLines wrapLongLines showLineNumbers className="rounded">
              {codeSnippets.ReactTypescriptComponentExample}
            </CodePreview>
          </div>
        </div>
      ),
      visibility: true,
    },
  ]);

  const handleArticleVisibilityOnClick = useCallback(
    (id: string) => {
      const articlesCopy = [...articles];
      const i = articlesCopy.findIndex((item) => item.id === id);

      articlesCopy[i].visibility = !articles[i].visibility;
      setArticles(articlesCopy);
    },
    [articles]
  );

  return { articles, handleArticleVisibilityOnClick };
};
