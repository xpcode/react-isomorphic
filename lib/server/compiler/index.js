'use strict';

var koa = require('koa');
var app = module.exports = koa();

var webpack = require('webpack');
var webpackDevConfig = require('../../../webpack.dev.config.js');
var compiler = webpack(webpackDevConfig);

app.use(require("koa-webpack-dev-middleware")(compiler, {
  publicPath: webpackDevConfig.output.publicPath,
  noInfo: false,
  internals: true,
  stats: {
    colors: true
  }
})).use(require("koa-webpack-hot-middleware")(compiler, {
  path: "http://localhost:3004/__webpack_hmr"
})).listen(3004);