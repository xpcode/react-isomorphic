var React = require('react')
var Isomorph = require('../../common/components/base/isomorph')

module.exports = router => {

  router.get('/meta/:metaId', function (ctx) {
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

  return router
}
