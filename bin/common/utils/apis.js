'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
function apis(env) {
  if (env !== 'production') {
    return {
      USER_LOGIN: 'http://rap.upesn.me/mockjs/1/user/login.do'
    };
  }
  return {
    USER_LOGIN: '/user/login.do'
  };
}

exports.default = apis(process.env.NODE_ENV);