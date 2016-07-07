'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRouter = require('react-router');

exports.default = function (routes) {
  return regeneratorRuntime.mark(function _callee(next) {
    var _this = this;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            (0, _reactRouter.match)({
              routes: routes,
              location: this.req.url
            }, function (error, redirectLocation, renderProps) {
              if (redirectLocation) {
                _this.res.redirect(redirectLocation.pathname + redirectLocation.search);
              } else if (error) {
                console.error('ROUTER ERROR:', error);
                _this.res.status(500);
                _this.body = '500';
              } else if (renderProps) {
                // 交给后端 controller 处理

              } else {
                _this.body = "404";
              }
            });

            _context.next = 3;
            return next;

          case 3:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  });
};