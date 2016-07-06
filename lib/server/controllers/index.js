'use strict';

var router = require('koa-router')();

var __html = 'base/__html';

router.get('/', regeneratorRuntime.mark(function _callee(next) {
  return regeneratorRuntime.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          this.render(__html, {
            title: '首页',
            list: ['hello koa', 'hello react'],
            req: {
              path: this.path
            }
          });

        case 1:
        case 'end':
          return _context.stop();
      }
    }
  }, _callee, this);
}));

router.get('/user/login', regeneratorRuntime.mark(function _callee2() {
  return regeneratorRuntime.wrap(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          this.render(__html, {
            title: '用户登陆',
            initialState: {
              user: [{
                name: 'aa'
              }, {
                name: 'bb'
              }]
            },
            req: {
              path: this.path
            }
          });

        case 1:
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


          this.render(__html, {
            title: '用户信息',
            userInfo: {
              name: '管理员'
            },
            req: {
              path: this.path
            }
          });

        case 2:
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
          this.render(__html, {
            title: '用户列表',
            list: [{
              name: '管理员'
            }],
            req: {
              path: this.path
            }
          });

        case 1:
        case 'end':
          return _context4.stop();
      }
    }
  }, _callee4, this);
}));

module.exports = router;