'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require('redux');

var _reactRouterRedux = require('react-router-redux');

var _component = require('./component');

var _component2 = _interopRequireDefault(_component);

var _user = require('./user');

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rootReducer = (0, _redux.combineReducers)({
  user: _user2.default,
  component: _component2.default,
  routing: _reactRouterRedux.routerReducer
});

exports.default = rootReducer;