const path = require('path');
const webpack = require('webpack');
const { VueLoaderPlugin } = require('vue-loader');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const SRC = path.resolve(__dirname, 'src');
const ASSETS = path.resolve(SRC, 'assets');
const DIST = path.resolve(__dirname, 'dist');

module.exports = {
  entry: {
    app: path.join(SRC, 'app.js'),
  },
  output: {
    path: DIST,
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.(css|scss)$/,
        use: ['vue-style-loader', 'css-loader',  'sass-loader'],
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    },
    extensions: ['.js', '.vue'],
  },
  plugins: [
    new VueLoaderPlugin(),
    new CopyWebpackPlugin([
      {
        from: path.join(ASSETS, 'index.html'),
        to: DIST,
      },
    ]),
  ],
  devServer: {
    port: 10001,
    contentBase: [ASSETS],
  },
};
