const { merge } = require('webpack-merge');
const path = require('path');

const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const common = require('./webpack.common'); // the common webpack configuration

module.exports = merge(common, {
  mode: 'production',
  output: { filename: '[name].[contenthash:8].bundle.js' },
  optimization: {
    minimizer: [
      new CssMinimizerPlugin(),
      new TerserPlugin({ terserOptions: { mangle: true } }),
    ],
  },
  plugins: [
    new HtmlPlugin({
      template: path.resolve(__dirname, '../public/index.html'),
      minify: {
        collapseWhitespace: true,
        removeAttributeQuotes: true,
        removeComments: true,
      },
    }),
    new MiniCssExtractPlugin({ filename: '[name].[contenthash:8].bundle.css' }),
  ],
});
