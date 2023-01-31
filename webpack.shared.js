const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

const moduleConfig = {
  rules: [
    {
      test: /\.(?:ts|tsx)$/,
      exclude: /node_modules/,
      resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json']
      },
      use: 'ts-loader'
    },
    {
      test: /\.(ico|jpg|jpeg|png|gif)$/,
      use: ['url-loader']
    }
  ]
};

const resolveConfig = {
  alias: {}
};

const pluginConfig = () => {
  return [
    new HtmlWebpackPlugin({
      template: './public/template.html',
      filename: 'index.html',
      inject: 'head',
      favicon: './public/favicon.ico'
    }),
    new ESLintPlugin({
      extensions: ['js', 'jsx', 'ts', 'tsx'],
      emitWarning: true
    })
  ];
};

const devServerConfig = {
  port: 5005,
  historyApiFallback: true
};

module.exports = {
  moduleConfig,
  resolveConfig,
  pluginConfig,
  devServerConfig
};
