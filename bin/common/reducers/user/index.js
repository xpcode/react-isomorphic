'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initialState = undefined;
exports.default = user;

var _immutable = require('immutable');

var _immutable2 = _interopRequireDefault(_immutable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = exports.initialState = {
  loginStatus: -1, // -1：未登陆；0：登录中；1：已登录；
  info: {
    id: null,
    cname: null
  },
  list: []
};

function user() {
  var $$state = arguments.length <= 0 || arguments[0] === undefined ? _immutable2.default.fromJS(initialState) : arguments[0];
  var action = arguments[1];

  switch (action.type) {
    default:
      return $$state;
  }
}