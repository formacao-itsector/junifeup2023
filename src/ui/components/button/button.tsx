import React from 'react';

interface ButtonProps {
  label: string;
  onClick?: () => void;
}

export const Button = ({ label, onClick }: ButtonProps) => {
  return (
    <div className="flex flex-col gap-4">
      <button
        onClick={onClick}
        className="border-2 text-white border-violet-700 bg-violet-700 rounded font-bold text-lg px-[2.5rem] py-1 flex items-center justify-center transition-all hover:-translate-y-[2px] hover:bg-transparent focus:border-violet-100"
      >
        {label}
      </button>
    </div>
  );
};
