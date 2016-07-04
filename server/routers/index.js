var router = require('koa-router')()

router.get('/', function* (next) {
  this.render('home/index', {
    title: '首页',
    list: [
      'hello koa',
      'hello react'
    ]
  })
})

router.get('/user/login', function* () {
  this.render('user/login', {
    title: '用户登陆'
  })
})

router.get('/user/:userId', function* () {
  let userId = this.params.userId

  this.render('user/info', {
    title: '用户信息',
    userInfo: {
      name: '管理员'
    }
  })
})

router.get('/users', function* () {
  this.render('user/list', {
    title: '用户列表',
    list: [{
      name: '管理员'
    }]
  })
})

module.exports = router
