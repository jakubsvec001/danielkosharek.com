const path = require('path');
const ENTRY = path.resplve(__dirname, 'src', 'src_index.ts');
const OUT = path.resolve(__dirname, './public');

module.exports = {
  mode: 'development',
  entry: ENTRY,
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: OUT,
  },
  devtool: 'inline-source-map',
};
