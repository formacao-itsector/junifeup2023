import React from 'react';
interface SharedButtonProps {
  label: string;
  onClick?: () => void;
}

/* Named Exports
    - Estes utilizam o nome da function ou class como o seu identificador.
    - São importados com curly brackets - import { Button } from "./btn".
    - São permitidos vários named exports do mesmo ficheiro.
    - Named Exports são mais utilizados para componentes que vão ser importados múltiplas vezes.
    - Graças ao Typescript podem ser agrupados vários componentes dentro de um ficheiro index.ts.
*/

export const NamedExportButton = ({ label, onClick }: SharedButtonProps) => {
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

/* Default Exports
    - São Criados ao adicionar uma lina de export default - [Linha 41]
    - Ao serem importados podem ser declarados de qualquer maneira - import randomNameForBtn from "./btn"
    - É apenas permitido um export default por ficheiro.
    - São geralmente utilizados para componentes que vão ser importados somente uma vez, ou que exportam somente uma coisa.
*/
const DefaultExportedButton = ({ label, onClick }: SharedButtonProps) => {
  return (
    <div className="flex flex-col items-center gap-4">
      <h3 className="font-bold text-2xl ">Default Export</h3>

      <button
        onClick={onClick}
        className="border-2 border-violet-700 rounded-3xl font-bold text-lg px-[2.5rem] py-2 flex items-center justify-center transition-all hover:-translate-y-1 hover:border-violet-700  hover:bg-violet-700 focus:border-violet-100"
      >
        {label}
      </button>
    </div>
  );
};
export default DefaultExportedButton;
