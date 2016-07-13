'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require('redux');

var _reactRouterRedux = require('react-router-redux');

var _user = require('./modules/user');

var _user2 = _interopRequireDefault(_user);

var _meta = require('./modules/meta');

var _meta2 = _interopRequireDefault(_meta);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redux.combineReducers)({
  user: _user2.default,
  meta: _meta2.default,
  routing: _reactRouterRedux.routerReducer
});