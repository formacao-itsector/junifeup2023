import React from 'react';
import { CalendarIcon } from '@radix-ui/react-icons';
import { BlogTypography } from '../blogTypography';
import colors from 'tailwindcss/colors';

interface sharedComponentProps {
  content: string | React.ReactNode;
  style?: string;
}

export const Date = ({ content, style }: sharedComponentProps) => {
  return (
    <div className={style ? style : 'flex flex-row items-center gap-2'}>
      <CalendarIcon color={colors.zinc[400]} />
      <BlogTypography.Date content={content} />
    </div>
  );
};

export const HorizontalDivider = () => {
  return <div className="w-[1px] rounded bg-zinc-600 ml-[0.13rem]"></div>;
};
