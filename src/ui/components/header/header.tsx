import React, { ReactNode, useMemo } from 'react';
import { useCoreStore } from '@store';
import { useNav } from '@navigation';
import { Paths } from '@types';

export const Header: React.FC = () => {
  const { navigateTo } = useNav();
  const current_path = useCoreStore((state) => state.current_path);

  const reactTypescriptTimeStamp = new Date('2023-02-13 18:20').getTime();
  const reactHooksTimeStamp = new Date('2023-02-15 18:20').getTime();
  const reactStateTimeStamp = new Date('2023-02-17 18:20').getTime();
  // const reactAdvancedTimesStamp = new Date('2023-02-17 18:20').getTime();
  const reactPropsStateTimesStamp = new Date('2023-02-09 18:20').getTime();

  const currentTimeStamp = new Date().getTime();

  const titles: Record<Paths | string, { title: string; enabled: boolean }> = {
    [Paths.repoInit]: { title: 'Repo Init', enabled: true },
    [Paths.reactBasics]: { title: 'React Basics', enabled: true },
    [Paths.reactPropsState]: { title: 'React Props & State', enabled: currentTimeStamp > reactPropsStateTimesStamp },
    [Paths.reactTypescript]: { title: 'Typescript', enabled: currentTimeStamp > reactTypescriptTimeStamp },
    [Paths.reactHooks]: { title: 'Hooks', enabled: currentTimeStamp > reactHooksTimeStamp },
    [Paths.reactState]: { title: 'State Management', enabled: currentTimeStamp > reactStateTimeStamp },
    // [Paths.reactAdvanced]: { title: 'Advanced', enabled: currentTimeStamp > reactAdvancedTimesStamp },
  };

  const navLinks = useMemo(() => {
    const links: ReactNode[] = [];

    for (const path in titles) {
      const label = titles[path as Paths]?.title;
      const enabled = titles[path as Paths]?.enabled;
      if (enabled)
        links.push(
          <a
            key={path}
            onClick={() => navigateTo({ path: path as Paths })}
            className="text-zinc-300 flex justify-center font-bold text-lg transition-all hover:text-violet-600 hover:-translate-y-[2px] hover:cursor-pointer"
          >
            {label}
          </a>
        );
    }
    return links;
  }, []);

  return (
    <div className={'mb-16'}>
      <h1 className="h-10 font-extrabold text-4xl flex justify-center mt-12">
        <a
          href="https://github.com/formacao-itsector"
          className="text-violet-600 transition-all hover:text-violet-700 hover:-translate-x-1"
        >
          ITSector |&nbsp;
        </a>
        {titles[current_path]?.title}
      </h1>
      <div className="flex justify-around mt-5 items-center">{navLinks}</div>
    </div>
  );
};
