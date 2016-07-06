'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var isBrowser = typeof window !== 'undefined' && (typeof global === 'undefined' ? 'undefined' : _typeof(global)) === 'object';
var isServer = !isBrowser;

exports.default = {
  isBrowser: isBrowser,
  isServer: isServer
};