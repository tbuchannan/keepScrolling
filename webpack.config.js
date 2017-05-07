// webpack.config.js
var path = require('path');
const webpack = require('webpack');
const prod = process.argv.indexOf('-p') !== -1;

module.exports = {
  entry: './frontend/keepScrolling.jsx',
  output: {
    filename: './app/assets/javascripts/bundle.js',
  },
  module: {
    loaders: [
      {
        test: [/\.jsx?$/],
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  plugins: [
   new webpack.DefinePlugin({
     'process.env': {
       NODE_ENV: JSON.stringify('production')
     }
   }),
   new webpack.optimize.UglifyJsPlugin()
 ],
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx', '*']
  }
};
