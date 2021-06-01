const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const path = require('path');

const { HotModuleReplacementPlugin } = require('webpack');
const HtmlPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, '../dist'),
    hot: true,
    open: true,
    port: 8000,
  },
  plugins: [
    new HtmlPlugin({
      template: path.resolve(__dirname, '../public/index.html'),
    }),
  ],
});
