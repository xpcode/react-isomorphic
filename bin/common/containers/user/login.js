'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _platform = require('../../utils/platform');

var _platform2 = _interopRequireDefault(_platform);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Login = function (_React$Component) {
  _inherits(Login, _React$Component);

  function Login() {
    _classCallCheck(this, Login);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Login).call(this));

    _this.handleLogin = _this.handleLogin.bind(_this);
    return _this;
  }

  _createClass(Login, [{
    key: 'handleLogin',
    value: function handleLogin() {
      var history = this.props.history;

      history.pushState(null, '/user/1');
    }
  }, {
    key: 'render',
    value: function render() {
      if (_platform2.default.isBrowser === true) {
        console.log('未解决：浏览器重新渲染的问题');
      }

      var user = this.props.user;


      if (user.loginStatus === 1) {
        setTimeout(function () {
          history.pushState(null, '/user/1');
        }, 300);
      }

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'login-nav' },
          _react2.default.createElement(
            'span',
            { className: 'logintext m-l-5' },
            '账号登录'
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'up-content' },
          _react2.default.createElement(
            'div',
            { className: 'container' },
            _react2.default.createElement(
              'div',
              { className: 'row login-content' },
              _react2.default.createElement('div', { className: 'col-xs-7' }),
              _react2.default.createElement(
                'div',
                { className: 'col-xs-4  login-form' },
                _react2.default.createElement(
                  'div',
                  { className: 'col-xs-12 content-form' },
                  _react2.default.createElement('input', { type: 'text', id: 'corp_id', hidden: 'hidden' }),
                  _react2.default.createElement(
                    'div',
                    { className: 'login-title' },
                    '账户登录'
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'errorMsg glyphicon glyphicon-remove-sign', id: 'errorMsg' },
                    '账号与密码不匹配，请重新输入'
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'form-group' },
                    _react2.default.createElement(
                      'div',
                      { className: 'input-group' },
                      _react2.default.createElement('div', { className: 'input-group-addon glyphicon glyphicon-user' }),
                      _react2.default.createElement('input', { type: 'text', className: 'form-control', id: 'username', ref: 'username', placeholder: '账号/手机/邮箱' })
                    )
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'form-group' },
                    _react2.default.createElement(
                      'div',
                      { className: 'input-group' },
                      _react2.default.createElement('div', { className: 'input-group-addon glyphicon glyphicon-lock' }),
                      _react2.default.createElement('input', { type: 'password', className: 'form-control', id: 'password', ref: 'password', placeholder: '密码' })
                    )
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'form-group' },
                    _react2.default.createElement(
                      'div',
                      { className: 'input-group' },
                      _react2.default.createElement('div', { className: 'input-group-addon glyphicon glyphicon-th-list' }),
                      _react2.default.createElement(
                        'button',
                        { className: 'btn btn-default dropdown-toggle accountbtn', type: 'button', id: 'dropdownMenu1', 'data-toggle': 'dropdown', 'aria-haspopup': 'true', 'aria-expanded': 'true' },
                        _react2.default.createElement(
                          'span',
                          { id: 'sp-accountContext' },
                          ' 请选择账套'
                        ),
                        _react2.default.createElement('span', { className: 'caret' })
                      ),
                      _react2.default.createElement('ul', { className: 'dropdown-menu', 'aria-labelledby': 'dropdownMenu1', id: 'accountSelect' })
                    )
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'form-group login-box' },
                    _react2.default.createElement(
                      'a',
                      { href: '#', className: 'forget-pwd', target: '_blank' },
                      '忘记登录密码'
                    ),
                    _react2.default.createElement(
                      'a',
                      { href: '/register?f=login', className: 'register', target: '_blank' },
                      '免费注册'
                    )
                  ),
                  _react2.default.createElement(
                    'button',
                    { className: 'btn btn-danger btn-width', onClick: this.handleLogin, id: 'submit' },
                    '登录'
                  )
                )
              )
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'footer' },
          _react2.default.createElement(
            'div',
            { className: 'text-center  m-t-15' },
            '©2016 用友优普信息技术有限公司 平台技术支持 京ICP备05007539号-10'
          )
        )
      );
    }
  }]);

  return Login;
}(_react2.default.Component);

var mapStateToProps = function mapStateToProps(state, ownProps) {
  return {
    user: state.user
  };
};

module.exports = (0, _reactRedux.connect)(mapStateToProps)(Login);