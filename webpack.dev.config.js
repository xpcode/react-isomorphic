var path = require('path')
var webpack = require('webpack')
var autoprefixer = require('autoprefixer')
var ExtractTextPlugin = require("extract-text-webpack-plugin")

module.exports = {
  entry: './src/client/index.jsx',
  output: {
    publicPath: 'http://localhost:3004/',
    path: path.join(__dirname, './static/'),
    filename: 'scripts/bundle.min.js'
  },
  resolve: {
    extensions: ["", ".js", ".jsx"],
    alias: {
      common: path.join(__dirname, './common'),
      client: path.join(__dirname, './client'),
      immutable: path.join(__dirname, 'node_modules/immutable/dist/immutable.min'),
      'react-router': path.join(__dirname, 'node_modules/react-router/umd/ReactRouter.min'),
    }
  },
  module: {
    loaders: [{
      test: /\.(js|jsx)$/,
      loader: 'babel',
      query: {
        "env": {
          "development": {
            "presets": ["react-hmre"]
          }
        },
      },
      includes: ['common', 'client']
    }, {
        test: /\.(jpg|png|gif)$/,
        loader: 'url?limit=8192',
      }, {
        test: /\.(less)$/,
        loaders: ExtractTextPlugin.extract("style-loader", "css-loader", "less-loader"),
      }, {
        test: /\.(css)$/,
        loaders: ExtractTextPlugin.extract("style-loader", "css-loader"),
      }]
  },
  postcss: [
    autoprefixer({
      browsers: ['last 2 versions']
    })
  ],
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"development"'
    }),
    new webpack.NoErrorsPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin("styles/default/index.css"),
  ],
  devServer: {
    headers: {
      "Access-Control-Allow-Origin": "*"
    },
    devtool: 'eval',
    hot: true,
    inline: true,
    port: 3004,
  },
  devtool: 'source-map',
}
