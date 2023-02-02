const { moduleConfig, devServerConfig, pluginConfig, resolveConfig } = require('./webpack.shared');

const path = require('path');

// configuração especifíca para produção

module.exports = {
  mode: 'production', // https://webpack.js.org/configuration/mode/
  entry: './src/index.tsx', // https://webpack.js.org/configuration/entry-context/#entry
  output: {
    path: path.join(__dirname, '/build/'), // https://webpack.js.org/configuration/output/#outputpath
    chunkFilename: '[contenthash].bundle.js', // https://webpack.js.org/configuration/output/#outputchunkfilename
  },
  optimization: {
    minimize: true, // https://webpack.js.org/configuration/optimization/#optimizationminimize
  },
  // configurações partilhadas
  devServer: devServerConfig,
  module: moduleConfig,
  resolve: resolveConfig,
  plugins: pluginConfig(),
};
