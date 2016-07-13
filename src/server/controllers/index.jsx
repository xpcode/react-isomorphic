import React from 'react'
import Router from 'koa-router'

const router = module.exports = Router()


var user = require('./user')
user(router)

var meta = require('./meta')
meta(router)

// TODO: 增加其他模块的路由，如：
// import report from './report'
// report(router)


router.get('/', function (ctx) {
  const pageInfo = {
    title: '用户登录',
    keyword: '',
    description: '',
  }

  // TODO: 调用 dispatch，store 会得到数据
  // store.dispatch({type: ACTION_USER_GET_LIST})

  ctx.render(pageInfo)
})
