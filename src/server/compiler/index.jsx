var koa = require('koa')
var webpack = require('webpack')
var webpackDevMiddleware = require('koa-webpack-dev-middleware')
var webpackDevConfig = require('../../../webpack.dev.config.js')
var compiler = webpack(webpackDevConfig)

var app = module.exports = koa()

console.log('开始编译并启动前端程序：')

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


var hotMiddleware = require("webpack-hot-middleware")(compiler, {
  path: "http://localhost:3004/__webpack_hmr"
})

app.use(function* (next) {
  yield hotMiddleware.bind(null, this.request, this.response);
  yield next;
})

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
