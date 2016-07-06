'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _redux = require('redux');

var _reactRouter = require('react-router');

var _reactRouterRedux = require('react-router-redux');

var _configureStore = require('../../utils/configureStore');

var _configureStore2 = _interopRequireDefault(_configureStore);

var _platform = require('../../utils/platform');

var _platform2 = _interopRequireDefault(_platform);

var _isomorph = require('./isomorph');

var _isomorph2 = _interopRequireDefault(_isomorph);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HtmlBase = function (_React$Component) {
  _inherits(HtmlBase, _React$Component);

  function HtmlBase() {
    _classCallCheck(this, HtmlBase);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(HtmlBase).apply(this, arguments));
  }

  _createClass(HtmlBase, [{
    key: 'render',
    value: function render() {
      if (_platform2.default.isServer === true) {
        console.log('__html props: ', JSON.stringify(this.props));
      }

      var _props2 = this.props;
      var title = _props2.title;
      var keyword = _props2.keyword;
      var description = _props2.description;
      var initialState = _props2.initialState;
      var req = _props2.req;


      var store = (0, _configureStore2.default)(initialState);

      var history = _platform2.default.isBrowser ? (0, _reactRouterRedux.syncHistoryWithStore)(_reactRouter.browserHistory, store) : (0, _reactRouter.createMemoryHistory)(req.path);

      var _props = {
        store: store,
        history: history
      };

      var scriptInnerHtml = 'window.__INITIAL_STATE__ = ' + JSON.stringify(store.getState()) + ';';

      return _react2.default.createElement(
        'html',
        null,
        _react2.default.createElement(
          'head',
          null,
          _react2.default.createElement('meta', { charSet: 'utf-8' }),
          _react2.default.createElement(
            'title',
            null,
            title
          ),
          _react2.default.createElement('meta', { name: 'description', content: description }),
          _react2.default.createElement('meta', { name: 'keyword', content: keyword }),
          _react2.default.createElement('meta', { httpEquiv: 'X-UA-Compatible', content: 'IE=edge,chrome=1' }),
          _react2.default.createElement('link', { href: '/styles/bootstrap/3.3.5/css/bootstrap.min.css', rel: 'stylesheet', type: 'text/css' }),
          _react2.default.createElement('link', { href: '/styles/default/login.css', rel: 'stylesheet', type: 'text/css' })
        ),
        _react2.default.createElement(
          'body',
          null,
          _react2.default.createElement(
            'div',
            { id: 'container' },
            _react2.default.createElement(_isomorph2.default, _props)
          ),
          _react2.default.createElement('script', { dangerouslySetInnerHTML: { __html: scriptInnerHtml } }),
          _react2.default.createElement('script', { src: '/build/main.js' })
        )
      );
    }
  }]);

  return HtmlBase;
}(_react2.default.Component);

exports.default = HtmlBase;