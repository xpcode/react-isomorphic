'use strict';

// 将根目录下 common、client 文件夹的程序，从 es6 转到 es5
require('babel-polyfill');
require('babel-register')({
  sourceMaps: true
});
require('./app');