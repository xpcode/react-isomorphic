import React from 'react'
import { connect } from 'react-redux'
import { Router, Route, Link } from 'react-router'
import {
  Header,
  Footer,
  HtmlBase,
} from '../../components'

class Login extends React.Component {
  constructor(){
    super()
    this.handleLogin=this.handleLogin.bind(this)
  }

  handleLogin() {
    const { history } = this.props

    history.pushState(null, '/user/1')
  }

  render() {
    console.log('未解决：浏览器重新渲染的问题')
    return (
      <HtmlBase {...this.props}>
        <div className="login-nav">
          <span className="logintext m-l-5">账号登录</span>
        </div>
        <div className="up-content">
          <div className="container">
            <div className="row login-content">
              <div className="col-xs-7"></div>
              <div className="col-xs-4  login-form">
                <div className="col-xs-12 content-form">
                  <input type="text" id="corp_id" hidden="hidden" />
                  <div className="login-title">账户登录</div>
                  <div className="errorMsg glyphicon glyphicon-remove-sign" id="errorMsg">账号与密码不匹配，请重新输入</div>
                  <div className="form-group">
                    <div className="input-group">
                      <div className="input-group-addon glyphicon glyphicon-user"></div>
                      <input type="text" className="form-control" id="username" ref="username" placeholder="账号/手机/邮箱"/>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="input-group">
                      <div className="input-group-addon glyphicon glyphicon-lock"></div>
                      <input type="password" className="form-control" id="password" ref="password" placeholder="密码"/>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="input-group">
                      <div className="input-group-addon glyphicon glyphicon-th-list"></div>
                      <button className="btn btn-default dropdown-toggle accountbtn"  type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                        <span id="sp-accountContext"> 请选择账套</span>
                        <span className="caret" ></span>
                      </button>
                      <ul className="dropdown-menu" aria-labelledby="dropdownMenu1" id="accountSelect">
                      </ul>
                    </div>
                  </div>
                  <div className="form-group login-box">
                    <a href="#" className="forget-pwd" target="_blank">忘记登录密码</a>
                    <a href="/register?f=login" className="register" target="_blank">免费注册</a>
                  </div>
                  <button className="btn btn-danger btn-width" onClick={this.handleLogin} id="submit">登录</button>
                </div>

              </div>
            </div>
          </div>
        </div>
        <div className="footer">
          <div className="text-center  m-t-15">©2016 用友优普信息技术有限公司 平台技术支持 京ICP备05007539号-10</div>
        </div>
      </HtmlBase>
    )
  }
}

// if (global.document) {
//   Login = connect()(Login)
// }
module.exports=  Login
