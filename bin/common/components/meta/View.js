'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

var _Control = require('./Control');

var _Control2 = _interopRequireDefault(_Control);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var View = function (_Component) {
  _inherits(View, _Component);

  function View() {
    _classCallCheck(this, View);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(View).apply(this, arguments));
  }

  _createClass(View, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var cTplGroupName = _props.cTplGroupName;
      var iOrder = _props.iOrder;
      var bMain = _props.bMain;
      var cGroupControlType = _props.cGroupControlType;
      var controls = _props.controls;
      var containers = _props.containers;


      var renderString = null;

      if (containers.length > 0) {
        renderString = containers.map(function (item, i) {
          return _react2.default.createElement(View, _extends({}, item, { key: 'view_' + i }));
        });
      } else if (cGroupControlType === 'TabPage') {
        renderString = controls.map(function (item, i) {
          return _react2.default.createElement(_Control2.default, _extends({}, item, { key: 'control_' + i }));
        });
      }

      return _react2.default.createElement(
        'div',
        null,
        renderString
      );
    }
  }]);

  return View;
}(_react.Component);

View.propTypes = {
  type: _react.PropTypes.string.isRequired,
  name: _react.PropTypes.string,
  containers: _react.PropTypes.array,
  controls: _react.PropTypes.array
};
View.defaultProps = {
  containers: [],
  controls: []
};
exports.default = View;