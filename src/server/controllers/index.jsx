import React from 'react'
import koaRouter from 'koa-router'

const router = koaRouter()
export default router


import user from './user'
user(router)

// TODO: 增加其他模块的路由，如：
// import report from './report'
// report(router)

// export default router
