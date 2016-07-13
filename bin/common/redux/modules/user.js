'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userLogin = exports.ACTION_USER_LOGIN_FAILURE = exports.ACTION_USER_LOGIN_SUCCESS = exports.ACTION_USER_LOGIN = undefined;

var _immutable = require('immutable');

var _immutable2 = _interopRequireDefault(_immutable);

var _isomorphicFetch = require('isomorphic-fetch');

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

var _urls = require('../../helpers/urls');

var _urls2 = _interopRequireDefault(_urls);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  var $$state = arguments.length <= 0 || arguments[0] === undefined ? _immutable2.default.fromJS({
    loginStatus: -1, // -1：未登陆；0：登录中；1：已登录；
    info: {
      id: null,
      cname: null
    },
    list: []
  }) : arguments[0];
  var action = arguments[1];

  switch (action.type) {
    default:
      return $$state;
  }
};

var ACTION_USER_LOGIN = exports.ACTION_USER_LOGIN = 'ACTION_USER_LOGIN'; // 用户登陆
var ACTION_USER_LOGIN_SUCCESS = exports.ACTION_USER_LOGIN_SUCCESS = 'ACTION_USER_LOGIN_SUCCESS'; // 用户登陆成功
var ACTION_USER_LOGIN_FAILURE = exports.ACTION_USER_LOGIN_FAILURE = 'ACTION_USER_LOGIN_FAILURE'; // 用户登陆失败

/**
 * 用户登陆
 * @param username
 * @param password
 * @param remember
 * @returns {Function}
 */
var userLogin = exports.userLogin = function userLogin(username, password) {
  var remember = arguments.length <= 2 || arguments[2] === undefined ? false : arguments[2];

  var login = function login(type, data) {
    return {
      type: type,
      payload: data
    };
  };

  return function (dispatch, getState) {

    // 登陆中，做禁用登陆 Button 等操作
    dispatch(login(ACTION_USER_LOGIN));

    var options = {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: username,
        password: password
      })
    };

    (0, _isomorphicFetch2.default)(_urls2.default.USER_LOGIN, options).then(function (response) {
      if (response.status >= 400) {
        throw new Error("Bad response from server");
      }
      return response.json();
    }).then(function (json) {
      // set cookies
      // document.cookie = 'user=' + json.username
      dispatch(login(ACTION_USER_LOGIN_SUCCESS, json));
    });
  };
};