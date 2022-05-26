const path = require('path');

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
        exclude: /node_modules/,
        use: [{
          loader: "file-loader",
          options: {
            outputPath: "images",
            name: '[name]-[sha1:hash:7].[ext]'
          }
        }]
      },{
        test: /\.(ttf|otf|eot|woff|woff2)$/,
        exclude: /node_modules/,
        use: [{
          loader: "file-loader",
          options: {
            outputPath: "fonts",
            name: '[name].[ext]'
          }
        }]
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
  },
}