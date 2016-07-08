'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _isomorph = require('../../common/components/base/isomorph');

var _isomorph2 = _interopRequireDefault(_isomorph);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (router) {

  router.get('/', function (next) {});

  router.get('/user/login', function (ctx) {
    var store = _isomorph2.default.store();
    var history = _isomorph2.default.history(store, ctx.path);
    var pageInfo = {
      title: '用户登录',
      keyword: '',
      description: ''
    };

    // TODO: 调用 dispatch，store 会得到数据
    // store.dispatch({type: ACTION_USER_GET_LIST})

    ctx.render(_react2.default.createElement(_isomorph2.default, { store: store, history: history }), pageInfo);
  });

  router.get('/user/:userId', function () {
    var userId = this.params.userId;
  });

  router.get('/users', function () {});

  return router;
};