var React = require('react')
var Isomorph = require('../../common/components/base/isomorph')

module.exports = router => {

  router.get('/user/login', function (ctx) {
    const pageInfo = {
      title: '用户登录',
      keyword: '',
      description: '',
    }

    // TODO: 调用 dispatch，store 会得到数据
    // ctx.store.dispatch({type: ACTION_USER_GET_LIST})

    ctx.render(pageInfo)
  })

  router.get('/user/:userId', function () {
    let userId = this.params.userId

  })

  router.get('/users', function () {

  })

  return router
}
