'use strict';

var _koa = require('koa');

var _koa2 = _interopRequireDefault(_koa);

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

new _koa2.default().use((0, _middlewares.viewhook)()).use((0, _middlewares.matchRoute)(_routes2.default)).use(_controllers2.default.routes()).use(_controllers2.default.allowedMethods()).use((0, _koaStatic2.default)(_path2.default.join(__dirname, '../../static'))).listen(3003);

console.log('listening on port 3003 --', process.env.NODE_ENV);