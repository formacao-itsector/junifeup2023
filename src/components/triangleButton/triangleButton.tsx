import { TriangleDownIcon, TriangleUpIcon } from '@radix-ui/react-icons';
import React from 'react';

interface TriangleButtonProps {
  triangleUp?: boolean;
  onClick(): void;
}
export const TriangleButton = ({ triangleUp = true, onClick }: TriangleButtonProps) => {
  const triangleStyles = 'w-12 h-12 animate-bounce hover:cursor-pointer';

  return (
    <>
      {triangleUp ? (
        <TriangleUpIcon className={triangleStyles} onClick={onClick} />
      ) : (
        <TriangleDownIcon className={triangleStyles} onClick={onClick} />
      )}
    </>
  );
};
