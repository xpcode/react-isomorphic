'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _koaRouter = require('koa-router');

var _koaRouter2 = _interopRequireDefault(_koaRouter);

var _user = require('./user');

var _user2 = _interopRequireDefault(_user);

var _meta = require('./meta');

var _meta2 = _interopRequireDefault(_meta);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _koaRouter2.default)();
exports.default = router;

(0, _user2.default)(router);

(0, _meta2.default)(router);

// TODO: 增加其他模块的路由，如：
// import report from './report'
// report(router)

router.get('/', function (ctx) {
  var pageInfo = {
    title: '用户登录',
    keyword: '',
    description: ''
  };

  // TODO: 调用 dispatch，store 会得到数据
  // store.dispatch({type: ACTION_USER_GET_LIST})

  ctx.render(pageInfo);
});