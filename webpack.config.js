const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const ENTRY = path.resolve(__dirname, 'src', 'src_index');
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
      {
        test: /\.s?css$/,
        oneOf,
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
