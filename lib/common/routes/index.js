'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _containers = require('../containers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createElement(
  _reactRouter.Route,
  { path: '/' },
  _react2.default.createElement(_reactRouter.IndexRoute, null),
  _react2.default.createElement(
    _reactRouter.Route,
    { path: 'user' },
    _react2.default.createElement(_reactRouter.Route, { path: 'login', component: _containers.Login }),
    _react2.default.createElement(_reactRouter.Route, { path: ':id', component: _containers.UserInfo })
  ),
  _react2.default.createElement(_reactRouter.Route, { path: 'users', component: _containers.UserList })
);