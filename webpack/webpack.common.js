const path = require('path');

const { ProgressPlugin } = require('webpack');
const { loader: MiniCssExtractLoader } = require('mini-css-extract-plugin');

module.exports = {
  entry: path.resolve(__dirname, '../src/index.js'),
  output: {
    clean: true,
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, '../dist'),
  },
  module: {
    rules: [
      {
        test: /\.(css|s[ac]ss)$/i,
        include: /[\\/]src[\\/]/i,
        use: [
          MiniCssExtractLoader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.([jt]sx?)$/i,
        include: /[\\/]src[\\/]/i,
        use: ['babel-loader'],
      },
      {
        test: /\.(jpe?g|png|gif)$/i,
        include: /[\\/]src[\\/]/i,
        type: 'asset/resource',
        generator: {
          filename: 'images/[name].webp[query]',
        },
      },
      {
        test: /\.(svg)$/i,
        include: /[\\/]src[\\/]/i,
        type: 'asset',
        generator: {
          filename: 'images/[name][ext][query]',
        },
      },
    ],
  },
  plugins: [new ProgressPlugin()],
  resolve: {
    extensions: ['.css', '.sass', '.scss', '.js', '.jsx', '.ts', '.tsx'],
  },
};
