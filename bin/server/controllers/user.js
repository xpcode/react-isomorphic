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

  router.get('/', regeneratorRuntime.mark(function _callee(next) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  router.get('/user/login', regeneratorRuntime.mark(function _callee2() {
    var store, history, pageInfo;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            store = _isomorph2.default.store();
            history = _isomorph2.default.history(store, this.path);
            pageInfo = {
              title: '用户登录',
              keyword: '',
              description: ''
            };

            // TODO: 调用 dispatch，store 会得到数据
            // store.dispatch({type: ACTION_USER_GET_LIST})

            this.render(_react2.default.createElement(_isomorph2.default, { store: store, history: history }), pageInfo);

          case 4:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  router.get('/user/:userId', regeneratorRuntime.mark(function _callee3() {
    var userId;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            userId = this.params.userId;

          case 1:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));

  router.get('/users', regeneratorRuntime.mark(function _callee4() {
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
          case 'end':
            return _context4.stop();
        }
      }
    }, _callee4, this);
  }));

  return router;
};