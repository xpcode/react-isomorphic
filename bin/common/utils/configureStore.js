'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

exports.default = configureStore;

var _redux = require('redux');

var _lodash = require('lodash');

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reduxLogger = require('redux-logger');

var _reduxLogger2 = _interopRequireDefault(_reduxLogger);

var _immutable = require('immutable');

var _immutable2 = _interopRequireDefault(_immutable);

var _platform = require('./platform');

var _platform2 = _interopRequireDefault(_platform);

var _reducers = require('../reducers');

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function configureStore(initialState) {
  var middlewares = [_reduxThunk2.default];

  if (_platform2.default.isBrowser === true) {
    (function () {
      var stateTransformer = function stateTransformer(states) {
        var finalStates = {};
        for (var key in states) {
          if (!states.hasOwnProperty(key)) continue;

          var state = states[key];

          if (_immutable2.default.Iterable.prototype.isPrototypeOf(state) && _typeof((0, _lodash.isFunction)(state.toObject))) {
            finalStates[key] = state.toObject();
          } else if ((0, _lodash.isPlainObject)(state)) {
            finalStates[key] = key === 'routing' ? states : stateTransformer(state);
          }
        }
        return finalStates;
      };
      var args = {
        stateTransformer: stateTransformer,
        collapsed: true,
        colors: {
          title: function title() {
            return 'red';
          },
          prevState: function prevState() {
            return 'blue';
          },
          action: function action() {
            return 'orange';
          },
          nextState: function nextState() {
            return 'green';
          },
          error: function error() {
            return '#F20404';
          }
        }
      };

      middlewares.push((0, _reduxLogger2.default)(args));
    })();
  }

  var store = (0, _redux.createStore)(_reducers2.default, initialState, (0, _redux.compose)(_redux.applyMiddleware.apply(undefined, middlewares), _platform2.default.isBrowser === true && window.devToolsExtension ? window.devToolsExtension() : function (f) {
    return f;
  }));

  return store;
}