'use strict';

var _koa = require('koa');

var _koa2 = _interopRequireDefault(_koa);

var _koaStatic = require('koa-static');

var _koaStatic2 = _interopRequireDefault(_koaStatic);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _viewhook = require('./middlewares/viewhook');

var _viewhook2 = _interopRequireDefault(_viewhook);

var _matchRoute = require('./middlewares/matchRoute');

var _matchRoute2 = _interopRequireDefault(_matchRoute);

var _controllers = require('./controllers');

var _controllers2 = _interopRequireDefault(_controllers);

var _routes = require('../common/redux/routes');

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

new _koa2.default().use((0, _viewhook2.default)()).use((0, _matchRoute2.default)(_routes2.default)).use(_controllers2.default.routes()).use(_controllers2.default.allowedMethods()).use((0, _koaStatic2.default)(_path2.default.join(process.cwd(), 'static'))).listen(3003);

console.log('listening on port 3003 --', process.env.NODE_ENV);