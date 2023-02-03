import React from 'react';
import { BlogTypography, BlogComponents } from '../../components';

export const Blog = () => {
  return (
    <div className="flex flex-col gap-3">
      <BlogComponents.Date content={`07/02/2023`} />

      <div className="flex flex-row">
        {/* SideBar */}
        <div className="w-[1px] rounded bg-zinc-600 ml-[0.13rem]"></div>

        <div className="flex flex-col max-w-xl gap-3 ml-10 border-b border-zinc-600 py-3">
          <BlogTypography.Text
            content={`Neste pequeno fórum like application vamos explorar alguns temas sobre as bases do React.Js e como é que ele se comporta.`}
          />

          <BlogTypography.Title content={`DataFlow no React.Js`} />
          <BlogTypography.Text
            content={`O data flow é uni direcional, como o react tem uma relação de componentes pai para filho, 
              passamos os dados de cima para baixo, isto atraves de props, ou global statment com o React 
              context ou atraves de uma store como o redux ou o zustand.`}
          />

          <BlogTypography.Title content={`DataFlow no React.Js`} />
          <BlogTypography.Text
            content={`O data flow é uni direcional, como o react tem uma relação de componentes pai para filho, 
              passamos os dados de cima para baixo, isto atraves de props, ou global statment com o React 
              context ou atraves de uma store como o redux ou o zustand.`}
          />
        </div>
      </div>
    </div>
  );
};
