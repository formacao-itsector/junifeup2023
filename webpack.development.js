const {
  moduleConfig,
  devServerConfig,
  pluginConfig,
  resolveConfig
} = require('./webpack.shared');

const path = require('path');

// configuração especifíca para desenvolvimento

module.exports = {
  mode: 'development', // https://webpack.js.org/configuration/mode/
  entry: './src/index.tsx', // https://webpack.js.org/configuration/entry-context/#entry
  output: {
    path: path.join(__dirname, '/build/'), // https://webpack.js.org/configuration/output/#outputpath
    publicPath: '/' // https://webpack.js.org/configuration/output/#outputpublicpath
  },
  devtool: 'source-map', // https://webpack.js.org/configuration/devtool/
  // configurações partilhadas
  devServer: devServerConfig,
  module: moduleConfig,
  resolve: resolveConfig,
  plugins: pluginConfig()
};
