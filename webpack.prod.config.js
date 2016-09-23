var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require("extract-text-webpack-plugin")

module.exports = {
  entry: './src/client/index.jsx',
  output: {
    path: path.join(__dirname, './'),
    filename: 'static/scripts/index.min.js'
  },
  resolve: {
    extensions: ["", ".js", ".jsx"],
  },
  module: {
    root: origin,
    modulesDirectories: ['node_modules'],
    loaders: [
      {
        test: /\.js|jsx$/,
        loader: 'babel',
        include: origin,
      }, {
        test: /\.jpg|png|gif$/,
        loader: 'url',
        include: origin,
      }, {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader", "less-loader"),
        include: origin,
      }, {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader"),
        include: origin,
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"',
      'process.env.__CLIENT__': 'true',
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      output: {
        comments: false,
      },
      compress: {
        warnings: false
      }
    }),
    new webpack.DllReferencePlugin({
      context: __dirname,
      manifest: require('./manifest.production.json')
    }),

    new webpack.BannerPlugin(`code\nupdate: ${nowDateStr}`),
    new ExtractTextPlugin("static/styles/default/[name].min.css"),
  ]
}
