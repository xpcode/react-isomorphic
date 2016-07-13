'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ViewModel = function (_Component) {
  _inherits(ViewModel, _Component);

  function ViewModel() {
    _classCallCheck(this, ViewModel);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(ViewModel).apply(this, arguments));
  }

  _createClass(ViewModel, [{
    key: 'generateScript',


    // 生成 viewmodel.js
    value: function generateScript(entities) {
      var script = null;

      if (process.env.NODE_ENV === 'production') {
        // 生成 js 文件到 /static/viewmodel/**.js、压缩，返回文件绝对路径
        // 确保只是首次生成
      }
      script = 'console.log("ouput viewmodel.js");';
      return script;
    }
  }, {
    key: 'render',
    value: function render() {
      var entities = this.props.entities;


      var content = this.generateScript(entities);

      var renderScript = (0, _lodash.isString)(content) ? _react2.default.createElement('script', { dangerouslySetInnerHTML: { __html: content } }) : _react2.default.createElement('script', { src: content });

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement('script', { src: '/static/scripts/cube/0.1.0/cube.js' }),
        renderScript
      );
    }
  }]);

  return ViewModel;
}(_react.Component);

ViewModel.propTypes = {
  entities: _react.PropTypes.array
};
ViewModel.defaultProps = {
  entities: []
};
exports.default = ViewModel;