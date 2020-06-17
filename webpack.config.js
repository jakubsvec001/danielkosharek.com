const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const isDevelopment = process.env.NODE_ENV === 'development';
const ENTRY = path.resolve(__dirname, 'src', 'src_index.tsx');
const OUT = path.resolve(__dirname, './public');

module.exports = {
  mode: 'development',
  entry: ENTRY,
  output: {
    filename: isDevelopment
      ? 'index.bundle.js'
      : 'index.[contenthash].bundle.js',
    path: OUT,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpeg|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
          },
        ],
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/'
            }
          }
        ]
      }
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
  ],
  resolve: {
    extensions: ['.js', 'jsx'],
  },
  devtool: 'inline-source-map',
};
