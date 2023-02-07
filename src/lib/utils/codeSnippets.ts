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

const RepoInitNpmInit = `npm init`;
const RepoInitDependencies = `npm i react react-dom`;
const RepoInitDevDependencies = `npm i -D @types/react @types/react-dom 
         @typescript-eslint/eslint-plugin 
         @typescript-eslint/parser eslint 
         eslint-plugin-react eslint-webpack-plugin
         html-webpack-plugin 
         prettier ts-loader typescript url-loader 
         webpack webpack-cli webpack-dev-server serve`;
const RepoInitScripts = `"scripts": {
    "dev": "webpack serve --config webpack.development.js",
    "prod": "webpack serve --config webpack.production.js",
        "build": "rm -rf ./build && webpack --config webpack.production.js && mv ./public/netlify.toml ./build/netlify.toml",
    "serve": "serve -s build -p 5005",
    "prettier": "prettier --write . --loglevel warn",
    "eslint": "eslint \'src/**\' --fix",
    "ready": "npm run prettier && npm run eslint"
  },`;

export const codeSnippets = {
  NamedExportButtonSyntax,
  DefaultExportButtonSyntax,
  JavascriptExample,
  TypescriptExample,
  ReactJavascriptComponentExample,
  ReactTypescriptComponentExample,
  RepoInitNpmInit,
  RepoInitDependencies,
  RepoInitDevDependencies,
  RepoInitScripts,
};
