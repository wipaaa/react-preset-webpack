const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, '../src/index.js'),
  output: {
    clean: true,
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, '../dist'),
  },
  resolve: {
    extensions: ['.css', '.sass', '.scss', '.js', '.jsx', '.ts', '.tsx'],
  },
};
