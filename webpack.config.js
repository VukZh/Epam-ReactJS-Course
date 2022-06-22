const path = require('path');

const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env = {}) => {

  const isProd = env.production;
  const isDev = env.development;

  return {
    mode: isProd ? "production" : isDev && "development",
    devtool: "source-map",
    resolve: {
      extensions: [".ts", ".tsx", ".js", ".jsx"]
    },
    entry: path.resolve(__dirname, './src/index.tsx'),
    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          use: ['ts-loader']
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
          test: /\.(s(a|c)ss)$/,
          use: ['style-loader','css-loader', 'sass-loader']
        },
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
}