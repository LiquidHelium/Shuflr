const webpack = require('webpack');

const productionPlugins = [
  new webpack.DefinePlugin({
    'process.env': { NODE_ENV: JSON.stringify('production') },
  }),
  new webpack.optimize.UglifyJsPlugin(),
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
    extensions: ['.ts', '.tsx', '.js'],
  },

  devtool: 'source-map',
  
  module: {
    loaders: [{
      test: /\.tsx?$/,
      exclude: /(node_modules)/,
      loader: 'ts-loader'
    }],
  },

  plugins: process.env.NODE_ENV === 'production' ? productionPlugins : [],
};

