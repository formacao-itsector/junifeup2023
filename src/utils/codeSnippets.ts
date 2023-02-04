const NamedExportButtonSyntax = `export const NamedExportButton = ({ label, onClick }) => {
  return (
    <div className="...">
      <button onClick={onClick} className="...">{label}</button>
    </div> 
    ); 
  };`;

const DefaultExportButtonSyntax = `const DefaultExportedButton = ({ label, onClick }) => {
  return (
    <div className="...">
      <button onClick={onClick} className="...">{label}</button>
    </div>
  );
};
export default DefaultExportedButton;`;

export const codeSnippets = {
  NamedExportButtonSyntax,
  DefaultExportButtonSyntax,
};
