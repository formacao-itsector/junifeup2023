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

const JavascriptExample = `let message = 'hello-junifeup';
message = 123; 
console.log(message);`;

const TypescriptExample = `let message: string = 'hello-junifeup';
message = 123; // throw an error
console.log(message);`;

const ReactJavascriptComponentExample = `const Hello = (props) => {
  return <h1>Hello, {props.name}</h1>;
}`;

const ReactTypescriptComponentExample = `interface Props {
  name: string;
}

const Hello: React.FC<Props> = (props) => {
  return <h1>Hello, {props.name}</h1>;
}`;

export const codeSnippets = {
  NamedExportButtonSyntax,
  DefaultExportButtonSyntax,
  JavascriptExample,
  TypescriptExample,
  ReactJavascriptComponentExample,
  ReactTypescriptComponentExample,
};
