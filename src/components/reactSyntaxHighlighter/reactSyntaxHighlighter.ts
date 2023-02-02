export const NamedExportButtonSyntax = `/* Named Exports
    - Estes utilizam o nome da function ou class como o seu identificador.
    - São importados com curly brackets - import { Button } from "./btn".
    - São permitidos vários named exports do mesmo ficheiro.
    - Named Exports são mais utilizados para componentes que vão ser importados múltiplas vezes.
    - Graças ao Typescript podem ser agrupados vários componentes dentro de um ficheiro index.ts.
*/
export const NamedExportButton = ({btnLabel}) => {
  return (
    <div className="...">
      <button className="...">{btnLabel}</button>
    </div>
  ); 
};`;
