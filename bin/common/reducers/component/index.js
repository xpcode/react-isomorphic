'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = component;

var _immutable = require('immutable');

var _immutable2 = _interopRequireDefault(_immutable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var $$initialState = _immutable2.default.fromJS({});

function component() {
  var $$state = arguments.length <= 0 || arguments[0] === undefined ? $$initialState : arguments[0];
  var action = arguments[1];

  switch (action.type) {
    default:
      return $$state;
  }
}