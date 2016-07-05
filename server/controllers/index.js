var router = require('koa-router')()

const __html = 'base/__html'

router.get('/', function* (next) {
  this.render(__html, {
    title: '首页',
    list: [
      'hello koa',
      'hello react'
    ],
    req: {
      path: this.path,
    }
  })
})

router.get('/user/login', function* () {
  this.render(__html, {
    title: '用户登陆',
    initialState: {
      user: [
        {
          name: 'aa'
        }, {
          name: 'bb'
        }
      ]
    },
    req: {
      path: this.path,
    }
  })
})

router.get('/user/:userId', function* () {
  let userId = this.params.userId

  this.render(__html, {
    title: '用户信息',
    userInfo: {
      name: '管理员'
    },
    req: {
      path: this.path,
    }
  })
})

router.get('/users', function* () {
  this.render(__html, {
    title: '用户列表',
    list: [{
      name: '管理员'
    }],
    req: {
      path: this.path,
    }
  })
})

module.exports = router
