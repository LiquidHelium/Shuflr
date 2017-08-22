const webpack = require('webpack');
const dotenv = require('dotenv');

dotenv.config();

const productionPlugins = [
  new webpack.DefinePlugin({
    'process.env': { NODE_ENV: JSON.stringify('production') },
  }),
  new webpack.optimize.UglifyJsPlugin(),
];

module.exports = {
  entry: {
    app: ['babel-polyfill', './src/client/index.tsx'],
  },

  output: {
    publicPath: '/static/',
    filename: 'static/script.js',
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },

  devtool: 'source-map',
  
  module: {
    loaders: [{
      test: /\.tsx?$/,
      exclude: /(node_modules)/,
      loader: 'ts-loader'
    }],
  },

  devServer: {
    compress: true,
    port: 9000,
    color: true,

  },

  plugins: process.env.NODE_ENV === 'production' ? productionPlugins : [],
};

