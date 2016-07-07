'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HtmlBase = exports.Footer = exports.Header = exports.NotFound = undefined;

var _NotFound = require('./error/NotFound');

var _NotFound2 = _interopRequireDefault(_NotFound);

var _header = require('./header');

var _header2 = _interopRequireDefault(_header);

var _footer = require('./footer');

var _footer2 = _interopRequireDefault(_footer);

var _html = require('./base/__html');

var _html2 = _interopRequireDefault(_html);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.NotFound = _NotFound2.default;
exports.Header = _header2.default;
exports.Footer = _footer2.default;
exports.HtmlBase = _html2.default;