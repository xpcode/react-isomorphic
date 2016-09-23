var path = require('path');
var webpack = require('webpack');

var vendors = [
  'async-validator',
  'cookies-js',
  'classnames',
  'immutable',
  'isomorphic-fetch',
  'fixed-data-table',
  'keymirror',
  'lodash',
  'redux',
  'redux-logger',
  'redux-thunk',
  'react',
  'react-dom',
  'react-redux',
  'react-router',
  'react-router-redux',
  'warning',
];

var libraryName = 'vendorLibrary';
var __DEV__ = process.env.NODE_ENV !== 'production'
var manifestFileName = __DEV__ ?
  'manifest.development.json' :
  'manifest.production.json'

var config = {
  entry: {
    vendor: vendors
  },
  output: {
    path: path.join(__dirname, './'),
    filename: 'static/scripts/common/vendor.js',
    library: libraryName,
  },
  module: {
    noParse: [/src/],
    root: path.resolve('.'),
    modulesDirectories: ['node_modules'],
  },
  plugins: [
    new webpack.DllPlugin({
      path: manifestFileName,
      name: libraryName,
      context: __dirname,
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
  ],
  devtool: 'source-map',
};

if (__DEV__ === false) {
  config.output.filename = 'static/scripts/common/vendor.min.js';
  config.plugins.push(new webpack.optimize.UglifyJsPlugin({
    output: {
      comments: false,
    },
    compress: {
      warnings: false
    }
  }));
}

module.exports = config
