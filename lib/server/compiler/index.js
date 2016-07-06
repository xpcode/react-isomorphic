'use strict';

require('babel-polyfill');
var koa = require('koa');

var app = module.exports = koa();

app.listen(3003);

console.log('listening on port 3003 -- ', process.env.NODE_ENV);

// 热替换
var webpack = require('webpack');
var webpackDevMiddleware = require('koa-webpack-dev-middleware');
var webpackHotMiddleware = require('koa-webpack-hot-middleware');
var webpackDevConfig = require('../../../webpack.dev.config.js');
var compiler = webpack(webpackDevConfig);

app.use(webpackDevMiddleware(compiler, {
  publicPath: webpackDevConfig.output.publicPath,
  noInfo: false,
  internals: true,
  stats: {
    colors: true
  }
})).use(webpackHotMiddleware(compiler));

// require('babel-polyfill')
// require('babel-register')
// var koa = require('koa')
// var webpack = require('webpack')
// var webpackDevMiddleware = require('koa-webpack-dev-middleware')
// var webpackHotMiddleware = require('koa-webpack-hot-middleware')
// var webpackDevConfig = require('../../../webpack.dev.config.js')
// var compiler = webpack(webpackDevConfig)

// var app = module.exports = koa()
// console.log(app)
// app.listen(3004)
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