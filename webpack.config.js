const path = require('path');
const webpack = require('webpack');
const config = {
  context: path.resolve(__dirname, 'src'),
  entry: {
    app: './js/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
    publicPath: '/dist'
  },
  devtool: "source-map",
  module: {
    rules: [{
      test: /\.scss$/,
      use: [{
          loader: "style-loader" // creates style nodes from JS strings
      }, {
          loader: "css-loader" // translates CSS into CommonJS
      }, {
          loader: "sass-loader" // compiles Sass to CSS
      }]
    }],
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css', 'sass']
      }
    ]
  },
  devServer: {
    port: 3000,
    hot: true,
    contentBase: path.resolve(__dirname, 'src'),
    watchContentBase: true
  }
};

module.exports = config;
