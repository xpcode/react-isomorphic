var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: './client/index',
  output: {
    publicPath: '/build',
    path: path.join(__dirname, './public/build/'),
    filename: 'main.min.js'
  },
  resolve: {
    extensions: ["", ".js", ".jsx"],
    alias: {
      common: path.join(__dirname, './common'),
      client: path.join(__dirname, './client'),
      immutable: path.join(__dirname, 'node_modules/immutable/dist/immutable.min'),
      react: path.join(__dirname, 'node_modules/react/dist/react-with-addons.min'),
      redux: path.join(__dirname, 'node_modules/redux/dist/redux.min'),
      'react-dom': path.join(__dirname, 'node_modules/react-dom/dist/react-dom.min'),
      'react-slick': path.join(__dirname, 'node_modules/react-slick/dist/react-slick.min'),
      'react-proxy': path.join(__dirname, 'node_modules/react-proxy/dist/ReactProxy'),
      'react-redux': path.join(__dirname, 'node_modules/react-redux/dist/react-redux.min'),
      'react-router': path.join(__dirname, 'node_modules/react-router/umd/ReactRouter.min'),
      'react-logger': path.join(__dirname, 'node_modules/react-logger/dist/index.min'),
      'react-thunk': path.join(__dirname, 'node_modules/react-thunk/dist/redux-thunk.min'),
    }
  },
  module: {
    loaders: [{
      test: /\.(js|jsx)$/,
      loader: 'babel',
      includes: ['common', 'client']
    }, {
        test: /\.(jpg|png|gif)$/,
        loader: 'url',
      }, {
        test: /\.(less)$/,
        loaders: ['style', 'css', 'less'],
      }, {
        test: /\.(css)$/,
        loaders: ['style', 'css'],
      }]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"'
    }),
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.UglifyJsPlugin(),
  ],
  devtool: 'source-map',
}
