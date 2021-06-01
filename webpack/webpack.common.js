const path = require('path');

const { ProgressPlugin } = require('webpack');

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
        test: /\.([jt]sx?)$/i,
        include: /[\\/]src[\\/]/i,
        use: ['babel-loader'],
      },
    ],
  },
  plugins: [new ProgressPlugin()],
  resolve: {
    extensions: ['.css', '.sass', '.scss', '.js', '.jsx', '.ts', '.tsx'],
  },
};
