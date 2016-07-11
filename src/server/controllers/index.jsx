import React from 'react'
import Router from 'koa-router'
import Isomorph from '../../common/components/base/isomorph'

const router = Router()
export default router


import user from './user'
user(router)

// TODO: 增加其他模块的路由，如：
// import report from './report'
// report(router)


router.get('/', function (ctx) {
  const store = Isomorph.createStore()
  const history = Isomorph.createHistory(store, ctx.path)
  const pageInfo = {
    title: '用户登录',
    keyword: '',
    description: '',
  }

  // TODO: 调用 dispatch，store 会得到数据
  // store.dispatch({type: ACTION_USER_GET_LIST})

  ctx.render(<Isomorph store={store} history={history}/>, pageInfo)
})
