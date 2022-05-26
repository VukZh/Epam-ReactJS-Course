const path = require('path');

const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, './src/index.js'),
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },{
        test: /\.(png|gif|ico|jpg|jpeg)$/,
        use: [{
          loader: "file-loader",
          options: {
            outputPath: "images",
            name: '[name]-[sha1:hash:7].[ext]'
          }
        }]
      },{
        test: /\.(ttf|otf|eot|woff|woff2)$/,
        use: [{
          loader: "file-loader",
          options: {
            outputPath: "fonts",
            name: '[name].[ext]'
          }
        }]
      }
      ,{
        test: /\.(css)$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "public/index.html"
    }),
    new MiniCssExtractPlugin({
      filename: 'style-[hash:8].css'
    })
  ],
  devServer: {
    open: true
  }
}