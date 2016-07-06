'use strict';

require('babel-polyfill');

var _koa = require('koa');

var _koa2 = _interopRequireDefault(_koa);

var _koaCompress = require('koa-compress');

var _koaCompress2 = _interopRequireDefault(_koaCompress);

var _koaLogger = require('koa-logger');

var _koaLogger2 = _interopRequireDefault(_koaLogger);

var _koaReactView = require('koa-react-view');

var _koaReactView2 = _interopRequireDefault(_koaReactView);

var _koaStatic = require('koa-static');

var _koaStatic2 = _interopRequireDefault(_koaStatic);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _controllers = require('./controllers');

var _controllers2 = _interopRequireDefault(_controllers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = module.exports = (0, _koa2.default)();
var viewPath = _path2.default.join(__dirname, '../common/components');

// 支持在 server 的路由程序里直接 render 出 ReactComponent
if (process.env.NODE_ENV !== 'production') {
  (0, _koaReactView2.default)(app, {
    extname: 'jsx',
    beautify: true,
    views: viewPath,
    internals: true
  });
} else {
  (0, _koaReactView2.default)(app, {
    extname: 'js',
    views: viewPath,
    internals: true
  });
}

app.use(_controllers2.default.routes()).use(_controllers2.default.allowedMethods()).use((0, _koaStatic2.default)(_path2.default.join(__dirname, 'public'))) // Serve static files
.use((0, _koaLogger2.default)()).use((0, _koaCompress2.default)()).listen(3003);

console.log('listening on port 3003 -- ', process.env.NODE_ENV);

if (process.env.NODE_ENV !== 'production') {

  // 热替换
  var webpack = require('webpack');
  var webpackDevMiddleware = require('koa-webpack-dev-middleware');
  var webpackHotMiddleware = require('koa-webpack-hot-middleware');
  var webpackDevConfig = require('../../webpack.dev.config.js');
  var compiler = webpack(webpackDevConfig);

  app.use(webpackDevMiddleware(compiler, {
    publicPath: webpackDevConfig.output.publicPath,
    noInfo: false,
    internals: true,
    stats: {
      colors: true
    }
  })).use(webpackHotMiddleware(compiler));
}