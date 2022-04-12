const webpackMerge = require('webpack-merge');
const baseConfig = require('./webpack.config.base');
const path = require('path');

/**
 * @type {import('webpack').WebpackOptionsNormalized}
 */
const devServer = {
  port: 3000,
  host: 'localhost',
  compress: true,
  historyApiFallback: true,
  hot: true,
};

const devConfig = {
  mode: 'development',
  devServer: devServer,
};

module.exports = webpackMerge.merge(baseConfig, devConfig);
