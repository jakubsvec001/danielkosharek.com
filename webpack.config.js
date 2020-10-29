const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const isDevelopment = process.env.NODE_ENV === 'development';
const ENTRY = path.resolve(__dirname, 'src', 'Src__index.jsx');
const OUT = path.resolve(__dirname, './public');
const FAVICON = path.resolve(__dirname, 'src', 'assets', 'images', 'thumbnails', 'June.11.2011_100px.jpg')

module.exports = {
  mode: 'development',
  entry: ENTRY,
  output: {
    filename: isDevelopment
      ? 'index.bundle.js'
      : 'index.[contenthash].bundle.js',
    path: OUT,
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: 'babel-loader',
        },
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpeg|jpg|gif|svg)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: 'images/[hash]-[name].[ext]',
            }
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/html_template/index.template.ejs',
      filename: 'index.html',
      title: 'DanielKosharek.com',
      inject: 'body',
      appMountId: 'root',
      favicon: FAVICON,
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devtool: 'inline-source-map',
};
