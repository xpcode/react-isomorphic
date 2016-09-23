var path = require('path')
var webpack = require('webpack')
var autoprefixer = require('autoprefixer')
var ExtractTextPlugin = require("extract-text-webpack-plugin")

module.exports = {
  entry: './src/client/index.jsx',
  output: {
    publicPath: 'http://localhost:3004/',
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
        query: {
          cacheDirectory: true
        }
      }, {
        test: /\.jpg|png|gif$/,
        loader: 'url?limit=8192',
        include: origin,
      }, {
        test: /\.less$/,
        loaders: ["style-loader", "css-loader", "less-loader"],
        include: origin,
      }, {
        test: /\.css$/,
        loaders: ["style-loader", "css-loader"],
        include: origin,
      }
    ]
  },
  postcss: [
    autoprefixer({
      browsers: ['last 2 versions']
    })
  ],
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"development"',
      'process.env.__CLIENT__': 'true',
    }),
    new webpack.DllReferencePlugin({
      context: __dirname,
      manifest: require('./manifest.development.json')
    }),
    new webpack.NoErrorsPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    headers: {
      "Access-Control-Allow-Origin": "*"
    },
    hot: true,
    inline: true,
    port: 3004,
  },
  devtool: 'source-map',
  cache: true,
}
