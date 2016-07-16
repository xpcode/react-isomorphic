import React from 'react'
import Router from 'koa-router'

const router = Router()
export default router


import user from './user'
user(router)

// TODO: 增加其他模块的路由，如：
// import report from './report'
// report(router)


router.get('/', function (ctx) {
  const pageInfo = {
    title: '首页',
    keyword: '',
    description: '',
  }

  ctx.render(pageInfo)
})
