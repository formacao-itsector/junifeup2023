import React, { useCallback, useState } from 'react';
import { BlogPostProps, BlogTypography, ExportedName } from '@components';
import ExportedDefault from '../../components/typesOfExports/typesOfExports';

export const useReactBasicsHelper = () => {
  const [articles, setArticles] = useState<BlogPostProps[]>([
    {
      id: '1',
      title: 'O que é JSX?',
      content:
        'É a junção de Javascript e XML, é basicamente a renderização do javascript mas com a estrutura do XML. O React esta a compilado para dentro do React.CreateElement, o que basicamente mostra que o react esta a criar elementos por debaixo dos panos.',

      visibility: true,
    },
    {
      id: '2',
      title: 'ClassName no React',
      content:
        'A palavra Class é uma keyword reservada do javascript, e como o jsx é compilado em javascript atraves do babel iria ocorrer um erro.',
      visibility: true,
    },
    {
      id: '3',
      title: 'Named Vs. Default Exports',
      children: (
        <div className="leading-snug pt-3 gap-3">
          <div className="mb-6">
            <BlogTypography.Subtitle content="Named Exports" />
            <ul className="list-disc ml-5 text-zinc-400">
              <li>Estes utilizam o nome da function ou class como o seu identificador;</li>
              <li>São imported com o uso dos curly brackets;</li>
              <li>São permitidos vários named exports por ficheiro;</li>
              <li>Com o Typescript podem ser agrupados vários componentes dentro de um ficheiro index.ts.</li>
            </ul>
            <ExportedName />
          </div>
          <div>
            <BlogTypography.Subtitle content="Default Exports" />
            <ul className="list-disc ml-5 text-zinc-400">
              <li>São criados ao adicionar uma lina de export default - [Linha 8];</li>
              <li>Ao serem importados podem ser declarados com qualquer nome;</li>
              <li>É apenas permitido um default export por ficheiro;</li>
              <li>São geralmente utilizados para componentes que vão ser importados somente uma vez.</li>
            </ul>
            <ExportedDefault />
          </div>
        </div>
      ),
      visibility: true,
    },
    {
      id: '4',
      title: 'Data Flow no React',
      content:
        'O data flow é uni-direcional, como o React tem uma relação de componentes pai para filho, passamos os dados de cima para baixo, isto atraves de props, ou então utilizando global statments com o React context ou atraves de uma store como o redux ou o zustand.',
      visibility: true,
    },
    {
      id: '5',
      title: 'O que é a virtual DOM ?',
      content:
        'O React mantem uma cópia do DOM, e sempre que existe uma alteração o react atualiza este virtual DOM e da sync com o DOM isto é a razão no react do porque de não podermos alterar o html diretamente.',
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
