import React from 'react'

import * as actions from '../../common/redux/modules/user'

export default function (router) {

  router.get('/user/login', function (ctx) {
    const pageInfo = {
      title: '用户登录',
      keyword: '',
      description: '',
    }

    ctx.render(pageInfo)
  })

  router.get('/user/:userId', function (ctx) {
    let userId = ctx.params.userId

    const pageInfo = {
      title: '用户信息',
      keyword: '',
      description: '',
    }

    ctx.render(pageInfo)
  })

  router.get('/users', async function (ctx) {
    const pageInfo = {
      title: '用户列表',
      keyword: '',
      description: '',
    }

    await queryUserByFromServices().then(json => {
      ctx.store.dispatch({
        type: actions.U8_USER_GETLIST_SUCCESS,
        payload: json
      })
      ctx.render(pageInfo)
    })
  })

  router.get('/users.do', async function (ctx) {
    await queryUserByFromServices().then(json => {
      ctx.body = json
    })
  })

  return router
}

function queryUserByFromServices() {
  const url = 'http://rap.taobao.org/mockjs/1/user/getlist.do'
  const options = {
    timeout: 5000
  }
  return fetch(url, options)
    .then(function (response) {
      if (response.status >= 400) {
        throw new Error("Bad response from server")
      }
      return response.json()
    })
    .then(response => {
      return require('../../__mock__/users')
    })
}
