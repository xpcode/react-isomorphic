'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _containers = require('../containers');

var Pages = _interopRequireWildcard(_containers);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var requireAuthentication = function requireAuthentication(nextState, replace, cb) {
  // loadUserInfo(store)
  //   .then((user) => {
  //     if (!user) replace('/login')
  //     cb()
  //   })
  //   .catch(err) {
  //   cb(err)
  // }
};

exports.default = _react2.default.createElement(
  _reactRouter.Route,
  { path: '/' },
  _react2.default.createElement(_reactRouter.IndexRoute, null),
  _react2.default.createElement(
    _reactRouter.Route,
    { path: 'meta' },
    _react2.default.createElement(_reactRouter.Route, { path: ':metaId', component: Pages.MetaIndexPage })
  ),
  _react2.default.createElement(
    _reactRouter.Route,
    { path: 'user' },
    _react2.default.createElement(_reactRouter.Route, { path: 'login', component: Pages.UserLoginPage }),
    _react2.default.createElement(_reactRouter.Route, { path: ':id', component: Pages.UserInfoPage })
  ),
  _react2.default.createElement(_reactRouter.Route, { path: 'users', component: Pages.UserListPage, onEnter: requireAuthentication }),
  _react2.default.createElement(_reactRouter.Route, { path: '*', component: Pages.ErrorNotFound })
);