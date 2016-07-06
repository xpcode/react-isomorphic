var koa = require('koa')
var webpack = require('webpack')
var webpackDevMiddleware = require('koa-webpack-dev-middleware')
var webpackHotMiddleware = require('koa-webpack-hot-middleware')
var webpackDevConfig = require('../../../webpack.dev.config.js')
var compiler = webpack(webpackDevConfig)

var app = module.exports = koa()

app.listen(3004)
app
  .use(webpackDevMiddleware(compiler, {
    publicPath: webpackDevConfig.output.publicPath,
    noInfo: false,
    internals: true,
    stats: {
      colors: true
    }
  }))
  .use(webpackHotMiddleware(compiler, {
    path: "http://localhost:3004/__webpack_hmr"
  }))


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
