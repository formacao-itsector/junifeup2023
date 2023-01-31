const {
  moduleConfig,
  devServerConfig,
  pluginConfig,
  resolveConfig
} = require('./webpack.shared');

const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.tsx',
  output: {
    path: path.join(__dirname, '/build/'),
    publicPath: '/'
  },
  devtool: 'source-map',
  // shared
  devServer: devServerConfig,
  module: moduleConfig,
  resolve: resolveConfig,
  plugins: pluginConfig()
};
