import Immutable from 'immutable'
import fetch from 'isomorphic-fetch'

import urls from '../../helpers/urls'


export default ($$state = Immutable.fromJS({
  loginStatus: -1,  // -1：未登陆；0：登录中；1：已登录；
  info: {
    id: null,
    cname: null,
  },
  list: [],
  dataSource: [],
  columns: [],
}), action) => {
  switch (action.type) {
    case U8_USER_GETLIST_SUCCESS:
      return $$state.merge(action.payload)

    default:
      return $$state
  }
}


// 用户登陆
export const U8_USER_LOGIN = 'U8_USER_LOGIN'
export const U8_USER_LOGIN_SUCCESS = 'U8_USER_LOGIN_SUCCESS'
export const U8_USER_LOGIN_FAILURE = 'U8_USER_LOGIN_FAILURE'
export function storeLogonInfo(type = U8_USER_LOGIN, info = {}) {
  return {
    type,
    payload: info
  }
}
export const userLogin = (username, password, remember = false) => {
  return (dispatch, getState) => {
    // 登陆中，做禁用登陆 Button 等操作
    dispatch(storeLogonInfo(U8_USER_LOGIN))

    let options = {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username,
        password
      })
    }

    fetch(urls.USER_LOGIN, options)
      .then(function (response) {
        if (response.status >= 400) {
          throw new Error("Bad response from server")
        }
        return response.json()
      })
      .then(function (json) {
        dispatch(storeLogonInfo(U8_USER_LOGIN_SUCCESS, json))
      })
  }
}


// 获取用户列表
export const U8_USER_GETLIST = 'U8_USER_GETLIST'
export const U8_USER_GETLIST_SUCCESS = 'U8_USER_GETLIST_SUCCESS'
export const U8_USER_GETLIST_FAILURE = 'U8_USER_GETLIST_FAILURE'
export function queryUserBy() {
  return (dispatch, getState) => {
    // 请求服务器接口
    fetch('/users.do')
      .then(function (response) {
        if (response.status >= 400) {
          throw new Error("Bad response from server")
        }
        return response.json()
      })
      .then(function (json) {
        dispatch({
          type: U8_USER_GETLIST_SUCCESS,
          payload: json
        })
      })
  }
}
