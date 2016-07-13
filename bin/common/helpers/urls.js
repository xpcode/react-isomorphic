'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var production = {
  USER_LOGIN: '/user/login.do',
  USER_FETCH_METADATA: 'http://10.10.12.93:8080/ucloud/billmeta/getbill.do?tplid=3&bIncludeViewModel=true'
};

var development = {
  USER_LOGIN: 'http://rap.upesn.me/mockjs/1/user/login.do',
  USER_FETCH_METADATA: 'http://10.10.12.93:8080/ucloud/billmeta/getbill.do?tplid=3&bIncludeViewModel=true'
};

exports.default = process.env.NODE_ENV === 'production' ? production : development;