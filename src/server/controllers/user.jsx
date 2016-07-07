export default router => {

  router.get('/', function* (next) {

  })

  router.get('/user/login', function* () {
    const store = Isomorph.store()
    const history = Isomorph.history(store, this.path)
    const pageInfo = {
      title: '用户登录',
      keyword: '',
      description: '',
    }

    // TODO: 调用 dispatch，store 会得到数据
    // store.dispatch({type: ACTION_USER_GET_LIST})

    this.render(<Isomorph store={store} history={history}/>, pageInfo)
  })

  router.get('/user/:userId', function* () {
    let userId = this.params.userId

  })

  router.get('/users', function* () {

  })

  return router
}
