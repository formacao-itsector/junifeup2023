export const NamedExportButtonSyntax = `/* Named Exports
Estes utilizam o nome da function ou class como o seu identificador;
São importados com curly brackets - import { Button } from "./btn";
São permitidos vários named exports do mesmo ficheiro;
Named Exports são mais utilizados para componentes que vão ser importados múltiplas vezes;
Com o Typescript podem ser agrupados vários componentes dentro de um ficheiro index.ts.
*/
export const NamedExportButton = ({btnLabel}) => {
  return (
    <div className="...">
      <button className="...">{btnLabel}</button>
    </div>
  ); 
};`;

export const DefaultExportButtonSyntax = `/* Default Exports
São Criados ao adicionar uma lina de export default - [Linha 14];
Ao serem importados podem ser declarados com qualquer nome;
É apenas permitido um default export por ficheiro;
São geralmente utilizados para componentes que vão ser importados somente uma vez.
*/
const DefaultExportedButton = ({ label, onClick }) => {
  return (
    <div className="...">
      <button onClick={onClick} className="...">{label}</button>
    </div>
  );
};
export default DefaultExportedButton;`;
