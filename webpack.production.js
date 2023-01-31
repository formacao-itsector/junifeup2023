const {
  moduleConfig,
  devServerConfig,
  pluginConfig,
  resolveConfig
} = require('./webpack.shared');
const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/index.tsx',
  output: {
    path: path.join(__dirname, '/build/'),
    chunkFilename: '[contenthash].bundle.js'
  },
  optimization: {
    minimize: true
  },
  // shared
  devServer: devServerConfig,
  module: moduleConfig,
  resolve: resolveConfig,
  plugins: pluginConfig()
};
