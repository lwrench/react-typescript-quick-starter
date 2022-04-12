//  config/webpack.config.base.js
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: './src/index.tsx',
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].[hash].js',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  module: {
    rules: [
      { test: /\.(ts|tsx)$/, loader: 'babel-loader', exclude: /node_modules/ },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: '管理后台',
      template: path.resolve(__dirname, '../../public/index.html'),
      filename: 'index.html',
    }),
    new CleanWebpackPlugin(),
  ],
};
