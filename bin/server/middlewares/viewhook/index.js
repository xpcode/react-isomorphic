'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = viewhook;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _server = require('react-dom/server');

var _server2 = _interopRequireDefault(_server);

var _jsBeautify = require('js-beautify');

var _jsBeautify2 = _interopRequireDefault(_jsBeautify);

var _copyTo = require('copy-to');

var _copyTo2 = _interopRequireDefault(_copyTo);

var _html = require('./html');

var _html2 = _interopRequireDefault(_html);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function viewhook() {
  var _options = arguments.length <= 0 || arguments[0] === undefined ? { beautify: true, internals: true } : arguments[0];

  var options = {};
  (0, _copyTo2.default)(_options).to(options);

  return regeneratorRuntime.mark(function _callee(next) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            this.render = function (component, pageInfo) {
              var internals = arguments.length <= 2 || arguments[2] === undefined ? options.internals || true : arguments[2];

              if (!_react2.default.isValidElement(component)) {
                var err = new Error('参数错误：请传入 ReactComponent 对象');
                err.code = 'REACT';
                throw err;
              }

              var render = internals ? _server2.default.renderToString : _server2.default.renderToStaticMarkup;

              var markup = render(component);

              if (options.beautify) {
                markup = _jsBeautify2.default.html(markup);
              }

              this.type = 'html';
              this.body = (0, _html2.default)(pageInfo, markup, component.props.store.getState());
            };

            _context.next = 3;
            return next;

          case 3:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  });
}