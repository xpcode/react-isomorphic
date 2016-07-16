// 判断是否是开发环境
process.env.NODE_ENV !== 'production'

// 判断是否是客户端环境
process.env.__CLIENT__ !== true

// koa 的 controller 写法
// 调用异步接口 queryUserByFromServices 后，把数据传递给 redux，然后 render
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
