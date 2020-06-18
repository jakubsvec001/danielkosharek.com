const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const isDevelopment = process.env.NODE_ENV === 'development';
const ENTRY = path.resolve(__dirname, 'src', 'index__src.jsx');
const OUT = path.resolve(__dirname, './public');
const FAVICON = path.resolve(__dirname, 'src', 'assets', 'Measure_Of_Time_100px', 'April.9.2011_100px.jpg')

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
        use: {
          loader: 'babel-loader',
        },
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
