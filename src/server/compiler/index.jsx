var koa = require('koa')
var app = module.exports = koa()

var webpack = require('webpack')
var webpackDevConfig = require('../../../webpack.dev.config.js')
var compiler = webpack(webpackDevConfig)

app
  .use(require("webpack-dev-middleware")(compiler, {
    publicPath: webpackDevConfig.output.publicPath,
    noInfo: false,
    internals: true,
    stats: {
      colors: true
    }
  }))
  .use(require("webpack-hot-middleware")(compiler, {
    path: "http://localhost:3004/__webpack_hmr"
  }))
  .listen(3004)

// import koa from 'koa'
// import path from 'path'
// import webpack from 'webpack'
// import webpackDevMiddleware from 'koa-webpack-dev-middleware'
// import webpackHotMiddleware from 'koa-webpack-hot-middleware'
// import webpackDevConfig from '../../webpack.dev.config.js'

// const app = koa()
// const compiler = webpack(webpackDevConfig)

// app
//   .use(webpackDevMiddleware(compiler, {
//     publicPath: webpackDevConfig.output.publicPath,
//     noInfo: false,
//     internals: true,
//     stats: {
//       colors: true
//     }
//   }))
//   .use(webpackHotMiddleware(compiler))
