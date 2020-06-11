const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack')


const isDevelopment = process.env.NODE_ENV === 'development';
const ENTRY = path.resolve(__dirname, 'src', 'src_index');
const OUT = path.resolve(__dirname, './public');


module.exports = {
  mode: 'development',
  entry: ENTRY,
  output: {
    filename: 'index.[contenthash].bundle.js',
    path: OUT,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.module\.s(a|c)ss$/,
        use: [
          isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: '@teamsupercell/typings-for-css-modules-loader',
            options: {
              banner:
                '// autogenerated by typings-for-css-modules-loader. \n// Please do not change this file!',
            },
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              sourceMap: isDevelopment,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: isDevelopment,
            },
          },
        ],
      },
      {
        test: /\.s(a|c)ss$/,
        exclude: /\.module.(s(a|c)ss)$/,
        use: [
          isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: '@teamsupercell/typings-for-css-modules-loader',
            options: {
              banner:
                '// autogenerated by typings-for-css-modules-loader. \n// Please do not change this file!',
            },
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              sourceMap: isDevelopment,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: isDevelopment,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: isDevelopment ? '[name].css' : '[name].[hash].css',
      chunkFilename: isDevelopment ? '[id].css' : '[id].[hash].css',
    }),
    new HtmlWebpackPlugin({
      template: 'src/html_template/index.template.ejs',
      filename: 'index.html',
      title: 'DanielKosharek.com',
      inject: 'body',
      appMountId: 'root',
      favicon: 'src/assets/site_favicon.png',
    }),
    new CleanWebpackPlugin(),
  ],
  resolve: {
    extensions: ['.scss', '.tsx', '.ts', '.js'],
  },
  devtool: 'inline-source-map',
};
