// 将根目录下 common、client 文件夹的程序，从 es6 转到 es5
require('babel-polyfill')
var register = require('babel-register')
var router = require('./controllers')
var path = require('path')
var koa = require('koa')
var compress = require('koa-compress')
var logger = require('koa-logger')
var serve = require('koa-static')
var react = require('koa-react-view')

var app = module.exports = koa()
var viewPath = path.join(__dirname, '../common/components')

// 支持在 server 的路由程序里直接 render 出 ReactComponent
react(app, {
  beautify: true,
  views: viewPath,
  internals: true,
})

app
  .use(router.routes())
  .use(router.allowedMethods())
  .use(serve(path.join(__dirname, 'public')))  // Serve static files
  .use(logger())
  .use(compress())
  .listen(3003)

console.log('listening on port 3003')


if (process.argv.slice(2).shift() === 'development') {


  // 热替换
  var webpack = require('webpack')
  var webpackDevMiddleware = require('koa-webpack-dev-middleware')
  var webpackHotMiddleware = require('koa-webpack-hot-middleware')
  var webpackDevConfig = require('../webpack.dev.config.js')
  var compiler = webpack(webpackDevConfig)

  app
    .use(webpackDevMiddleware(compiler, {
      publicPath: webpackDevConfig.output.publicPath,
      noInfo: false,
      internals: true,
      stats: {
        colors: true
      }
    }))
    .use(webpackHotMiddleware(compiler))
}
