import { TriangleDownIcon, TriangleUpIcon } from '@radix-ui/react-icons';
import React from 'react';

interface TriangleButtonProps {
  triangleUp?: boolean;
  onClick?: () => void;
}
export const TriangleButton = ({ triangleUp = true, onClick }: TriangleButtonProps) => {
  const triangleStyles = 'w-5 h-6 hover:cursor-pointer text-zinc-400 flex content-start';

  return (
    <>
      {triangleUp ? (
        <TriangleUpIcon className={triangleStyles} onClick={onClick && onClick} />
      ) : (
        <TriangleDownIcon className={triangleStyles} onClick={onClick && onClick} />
      )}
    </>
  );
};
