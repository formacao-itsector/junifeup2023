import React from 'react';

interface HeaderProps {
  classTitle: 'React Basics' | 'Typescript' | 'State Management'; //completar
}

export const Header: React.FC<HeaderProps> = ({ classTitle }) => {
  const routers = [
    'React Basics',
    'Typescript',
    'State Management',
    'Performance'
  ];

  return (
    <div>
      <h1 className="h-10 font-extrabold text-4xl flex justify-center mt-12">
        <a
          href="https://github.com/formacao-itsector"
          className="text-violet-600 transition-all hover:text-violet-700 hover:-translate-x-1"
        >
          ITSector|
        </a>
        {classTitle}
      </h1>

      <div className="grid grid-cols-2 gap-4 mt-3 mb-36 sm:grid-cols-4 items-center">
        {routers.map((router, i) => {
          return (
            <a
              key={i}
              href="#"
              className="text-zinc-300 flex justify-center font-bold text-lg transition-all hover:text-violet-600 hover:-translate-y-[2px]"
            >
              {router}
            </a>
          );
        })}
      </div>
    </div>
  );
};
