'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _lodash = require('lodash');

var _meta = require('../../redux/modules/meta');

var _View = require('../../components/meta/View');

var _View2 = _interopRequireDefault(_View);

var _ViewModel = require('../../components/meta/ViewModel');

var _ViewModel2 = _interopRequireDefault(_ViewModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Voucher = function (_React$Component) {
  _inherits(Voucher, _React$Component);

  function Voucher() {
    _classCallCheck(this, Voucher);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Voucher).apply(this, arguments));
  }

  _createClass(Voucher, [{
    key: 'render',
    value: function render() {
      var _props$meta = this.props.meta;
      var viewApplication = _props$meta.viewApplication;
      var viewmodel = _props$meta.viewmodel;


      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_View2.default, _extends({}, viewApplication.view, { key: 'view_root' })),
        _react2.default.createElement(_ViewModel2.default, _extends({}, viewmodel, { key: 'viewmodel_root' }))
      );
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      // this.props.fetchMetadata()
    }
  }]);

  return Voucher;
}(_react2.default.Component);

var mapStateToProps = function mapStateToProps(state, ownProps) {
  return {
    meta: state.meta.toJS()
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, {
  fetchMetadata: _meta.fetchMetadata
})(Voucher);