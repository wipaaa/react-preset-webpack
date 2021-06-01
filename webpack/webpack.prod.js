const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const path = require('path');

const HtmlPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  output: { filename: '[name].[contenthash:8].bundle.js' },
  plugins: [
    new HtmlPlugin({
      template: path.resolve(__dirname, '../public/index.html'),
      minify: {
        collapseWhitespace: true,
        removeAttributeQuotes: true,
        removeComments: true,
      },
    }),
  ],
});
