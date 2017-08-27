const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const productionPlugins = [
  new webpack.DefinePlugin({
    'process.env': { NODE_ENV: JSON.stringify('production') },
  }),
  new webpack.optimize.UglifyJsPlugin(),
];

const plugins = [
  new ExtractTextPlugin("./build/static/styles.css"),
];

module.exports = {
  entry: {
    app: ['./src/client/index.tsx'],
  },

  output: {
    publicPath: '/static/',
    filename: 'build/static/script.js',
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.scss', '.css'],
  },

  devtool: 'source-map',
  
  module: {
    loaders: [{
      test: /\.tsx?$/,
      exclude: /(node_modules)/,
      loader: 'ts-loader'
    },{
      test: /\.scss$/,
      use: ExtractTextPlugin.extract({
          use: [{
              loader: "css-loader",
              options: {
                modules: true,
                importLoaders: 1,
                localIdentName: "[name]__[local]___[hash:base64:5]"
              }
          }, {
              loader: "sass-loader"
          }],
          fallback: "style-loader"
      })
    }],
  },

  plugins: process.env.NODE_ENV === 'production'
    ? [...plugins, ...productionPlugins]
    : [...plugins],
};

