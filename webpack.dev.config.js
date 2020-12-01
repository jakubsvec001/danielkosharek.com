const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");


const ENTRY = path.resolve(__dirname, "src", "Src__index.jsx");
const OUT = path.resolve(__dirname, "./public");
const FAVICON = path.resolve(
  __dirname,
  "src",
  "assets",
  "images",
  "thumbnails",
  "June.11.2011_100px.jpg"
);

module.exports = {
  mode: process.env.NODE_ENV,
  entry: ENTRY,
  output: {
    filename: "index.[contenthash].bundle.js",
    path: OUT,
    publicPath: "/",
  },
  optimization: {
    moduleIds: "hashed",
    runtimeChunk: "single",
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendor",
          chunks: "all",
        },
      },
    },
    minimizer: process.env.NODE_ENV === 'production' ? [new UglifyJsPlugin()] : [],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: "babel-loader",
        },
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpeg|jpg|gif|svg)$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192,
              name: "[name].[hash:4].[ext]",
              outputPath: "images",
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/html_template/index.template.ejs",
      filename: "index.html",
      title: "DanielKosharek.com",
      inject: "body",
      appMountId: "root",
      favicon: FAVICON,
    }),
    new CleanWebpackPlugin(),
  ],
  resolve: {
    extensions: [".js", ".jsx"],
  },
  devtool: process.env.NODE_ENV === 'development' ? "inline-source-map" : "source-map",
};
