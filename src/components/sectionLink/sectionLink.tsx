import { ExternalLinkIcon } from '@radix-ui/react-icons';
import React from 'react';

interface SectionLinkProps {
  label: string;
  href: string;
  hasIcon?: boolean;
}

export const SectionLink = ({ label, href, hasIcon }: SectionLinkProps) => {
  return (
    <a href={href} className={'text-2xl font-bold inline-block transition-all hover:text-violet-500 hover:underline'}>
      <div className="flex flex-row">
        {label} {hasIcon && <ExternalLinkIcon />}
      </div>
    </a>
  );
};
