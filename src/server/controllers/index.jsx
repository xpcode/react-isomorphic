import React from 'react'
import koaRouter from 'koa-router'
import Isomorph from '../../common/components/base/isomorph'
export const router = koaRouter()


import user from './user'
user(router)

// TODO: 增加其他模块的路由，如：
// import report from './report'
// report(router)
