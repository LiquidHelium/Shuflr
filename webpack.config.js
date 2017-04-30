const webpack = require('webpack');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();

const productionPlugins = [
  new webpack.DefinePlugin({
    'process.env': { 'NODE_ENV': JSON.stringify('production') }
  }),
  new webpack.optimize.UglifyJsPlugin()
];

module.exports = {
  entry: {
    ifsl: ['babel-polyfill', './src/client/index.js'],
  },
  output: {
    publicPath: '/static/',
    filename: 'static/script.js'
  },
  devtool: 'source-map',
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /(node_modules)/,
      loader: 'babel-loader',
      query: { presets: ['env', 'react'] }
    }]
  },
  plugins: process.env.NODE_ENV == "production" ? productionPlugins : [],
};

