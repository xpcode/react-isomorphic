import fetch from 'isomorphic-fetch'

import apis from '../utils/apis'

export const ACTION_USER_LOGIN = 'ACTION_USER_LOGIN'  // 用户登陆
export const ACTION_USER_LOGIN_SUCCESS = 'ACTION_USER_LOGIN_SUCCESS'  // 用户登陆成功
export const ACTION_USER_LOGIN_FAILURE = 'ACTION_USER_LOGIN_FAILURE'  // 用户登陆失败

/**
 * 用户登陆
 * @param username
 * @param password
 * @param remember
 * @returns {Function}
 */
export const userLogin = (username, password, remember = false) => {
  const login = (type, data) => {
    return {
      type,
      payload: data
    }
  }

  return (dispatch, getState) => {

    // 登陆中，做禁用登陆 Button 等操作
    dispatch(login(ACTION_USER_LOGIN))

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

    fetch(apis.USER_LOGIN, options)
      .then(function (response) {
        if (response.status >= 400) {
          throw new Error("Bad response from server")
        }
        return response.json()
      })
      .then(function (json) {
        // set cookies
        // document.cookie = 'user=' + json.username
        dispatch(login(ACTION_USER_LOGIN_SUCCESS, json))
      })
  }
}
