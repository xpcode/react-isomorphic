'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _input = require('antd/lib/input');

var _input2 = _interopRequireDefault(_input);

var _button = require('antd/lib/button');

var _button2 = _interopRequireDefault(_button);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Control = function (_Component) {
  _inherits(Control, _Component);

  function Control() {
    _classCallCheck(this, Control);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Control).apply(this, arguments));
  }

  _createClass(Control, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var cItemName = _props.cItemName;
      var cCaption = _props.cCaption;
      var cShowCaption = _props.cShowCaption;
      var iMaxLength = _props.iMaxLength;
      var iFieldType = _props.iFieldType;
      var bMustSelect = _props.bMustSelect;
      var bHidden = _props.bHidden;
      var bCanModify = _props.bCanModify;
      var iMaxShowLen = _props.iMaxShowLen;
      var iColWidth = _props.iColWidth;
      var iAlign = _props.iAlign;
      var bShowIt = _props.bShowIt;
      var bIsNull = _props.bIsNull;
      var cControlType = _props.cControlType;
      var iOrder = _props.iOrder;
      var bMain = _props.bMain;
      var id = _props.id;
      var iParentId = _props.iParentId;
      // console.log(this.props)

      if (cControlType === 'Button') {
        return _react2.default.createElement(
          _button2.default,
          { onClick: function onClick(e) {
              return handleClick(e, entity);
            } },
          title
        );
      } else if (cControlType === 'Input') {
        return _react2.default.createElement(_input2.default, { onClick: function onClick(e) {
            return handleClick(e, entity);
          } });
      }

      return null;
    }
  }]);

  return Control;
}(_react.Component);

Control.propTypes = {
  ctrlType: _react.PropTypes.string.isRequired,
  name: _react.PropTypes.string,
  title: _react.PropTypes.string,
  entity: _react.PropTypes.string,
  field: _react.PropTypes.string
};
exports.default = Control;