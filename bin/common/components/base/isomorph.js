'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _reactRedux = require('react-redux');

var _reactRouterRedux = require('react-router-redux');

var _configureStore = require('../../redux/configureStore');

var _configureStore2 = _interopRequireDefault(_configureStore);

var _routes = require('../../redux/routes');

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Isomorph = function (_React$Component) {
  _inherits(Isomorph, _React$Component);

  function Isomorph() {
    _classCallCheck(this, Isomorph);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Isomorph).apply(this, arguments));
  }

  _createClass(Isomorph, [{
    key: 'render',
    value: function render() {
      if (process.env.__CLIENT__ === true) {
        console.log('未解决：浏览器重新渲染的问题');
      }

      var _props = this.props;
      var store = _props.store;
      var history = _props.history;


      return _react2.default.createElement(
        _reactRedux.Provider,
        { store: store },
        _react2.default.createElement(_reactRouter.Router, { history: history, routes: _routes2.default })
      );
    }
  }]);

  return Isomorph;
}(_react2.default.Component);

Isomorph.createStore = function (initialState) {
  return (0, _configureStore2.default)(initialState);
};

Isomorph.createHistory = function (store, path) {
  return process.env.__CLIENT__ === true ? (0, _reactRouterRedux.syncHistoryWithStore)(_reactRouter.browserHistory, store) : (0, _reactRouter.createMemoryHistory)(path);
};

exports.default = Isomorph;