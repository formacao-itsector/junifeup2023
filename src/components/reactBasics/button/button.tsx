import React from 'react';
interface SharedButtonProps {
  label: string;
  onClick?: () => void;
}

export const NamedExportButton = ({ label, onClick }: SharedButtonProps) => {
  return (
    <div className="flex flex-col gap-4">
      <button
        onClick={onClick}
        className="border-2  border-violet-700 bg-violet-700 rounded font-bold text-lg px-[2.5rem] py-1 flex items-center justify-center transition-all hover:-translate-y-[2px] hover:bg-transparent focus:border-violet-100"
      >
        {label}
      </button>
    </div>
  );
};

const DefaultExportedButton = ({ label, onClick }: SharedButtonProps) => {
  return (
    <div className="flex flex-col gap-4">
      <button
        onClick={onClick}
        className="border-2 border-violet-700 bg-violet-700 rounded font-bold text-lg px-[2.5rem] py-1 flex items-center justify-center transition-all hover:-translate-y-[2px] hover:bg-transparent focus:border-violet-100"
      >
        {label}
      </button>
    </div>
  );
};
export default DefaultExportedButton;
