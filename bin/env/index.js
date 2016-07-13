'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var envs = {
  development: {
    SCRIPT_BASEURL_DEV: 'http://localhost:3004',
    SCRIPT_BASEURL_PROD: ''
  }
};

exports.default = envs[process.env.NODE_ENV] || envs['production'];