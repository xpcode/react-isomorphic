var React = require('react')
var Isomorph = require('../../common/components/base/isomorph')

module.exports = router => {

  router.get('/user/login', function (ctx) {
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

  router.get('/user/:userId', function () {
    let userId = this.params.userId

  })

  router.get('/users', function () {

  })

  return router
}
