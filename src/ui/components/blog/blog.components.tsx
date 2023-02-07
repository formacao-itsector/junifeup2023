import React from 'react';
import { ExternalLinkIcon, BookmarkFilledIcon } from '@radix-ui/react-icons';
import colors from 'tailwindcss/colors';

interface SharedComponentProps {
  content: string | React.ReactNode;
  style?: string;
}

interface LinkProps {
  label: string;
  href: string;
  hasIcon?: boolean;
}

export const Section = ({ content, style }: SharedComponentProps) => {
  return (
    <div className={style ? style : 'flex flex-row gap-2 items-bottom'}>
      <BookmarkFilledIcon color={colors.zinc[400]} />
      <p className={style ? style : 'text-sm text-zinc-400'}>{content}</p>
    </div>
  );
};

export const HorizontalDivider = () => {
  return <div className="h-[1px] rounded bg-zinc-600 mt-3"></div>;
};

export const Link = ({ label, href, hasIcon }: LinkProps) => {
  return (
    <a href={href} className={'w-fit group'} target="_blank" rel="noreferrer">
      <div className="flex flex-row gap-1 items-center leading-snug transition-colors text-violet-400 group-hover:text-violet-500">
        {label} {hasIcon && <ExternalLinkIcon className="w-3 h-3" />}
      </div>
    </a>
  );
};
