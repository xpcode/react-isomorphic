'use strict';

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

var _middlewares = require('./middlewares');

var _controllers = require('./controllers');

var _controllers2 = _interopRequireDefault(_controllers);

var _routes = require('../common/routes');

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log('NODE_ENV', process.env.NODE_ENV);
console.log('__PROD__', process.env.__PROD__);
console.log('__DEV__', process.env.__DEV__);
console.log('__SERVER__', process.env.__SERVER__);
console.log('__CLIENT__', process.env.__CLIENT__);

(0, _koa2.default)().use((0, _middlewares.matchRoute)(_routes2.default)).use((0, _middlewares.viewhook)()).use(_controllers2.default.routes()).use(_controllers2.default.allowedMethods()).use((0, _koaStatic2.default)(_path2.default.join(__dirname, '../../static'))) // Serve static files
.use((0, _koaLogger2.default)()).use((0, _koaCompress2.default)()).listen(3003);

console.log('listening on port 3003 -- NODE_ENV', process.env.NODE_ENV);