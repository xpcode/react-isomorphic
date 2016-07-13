'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (router) {

  router.get('/user/login', function (ctx) {
    var pageInfo = {
      title: '用户登录',
      keyword: '',
      description: ''
    };

    // TODO: 调用 dispatch，store 会得到数据
    // ctx.store.dispatch({type: ACTION_USER_GET_LIST})

    ctx.render(pageInfo);
  });

  router.get('/user/:userId', function () {
    var userId = this.params.userId;
  });

  router.get('/users', function () {});

  return router;
};

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }