const path = require('path');
const webpack = require('webpack');
const { VueLoaderPlugin } = require('vue-loader');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const SRC = path.resolve(__dirname, 'src');
const ASSETS = path.resolve(SRC, 'assets');
const DIST = path.resolve(__dirname, 'dist');

module.exports = {
  entry: {
    app: null,
  },
  output: {
    path: DIST,
    filename: null,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [],
      },
    ],
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    },
    extensions: [],
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
