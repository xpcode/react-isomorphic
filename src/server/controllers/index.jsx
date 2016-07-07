var router = require('koa-router')()

import { match, RouterContext } from 'react-router';
import routes from '../../common/routes';

import generatePageString from '../../common/components/base/generatePageString'

router.get('/', function* (next) {
  // this.render(__html, {
  //   title: '首页',
  //   list: [
  //     'hello koa',
  //     'hello react'
  //   ],
  //   req: {
  //     path: this.path,
  //   }
  // })
})

router.get('/user/login', function* () {
  match({
    routes,
    location:
    this.req.url
  },
    (error, redirectLocation, renderProps) => {
      if (redirectLocation) {
        this.res.redirect(redirectLocation.pathname + redirectLocation.search)

      } else if (error) {
        console.error('ROUTER ERROR:', error)
        this.res.status(500)
        this.body = '500'

      } else if (renderProps) {
        this.body = generatePageString({
          path: this.path,
          title: '用户登陆'
        }, {
            user: [
              {
                name: 'aa'
              }, {
                name: 'bb'
              }
            ]
          })

      } else {
        this.body = "404";
      }
    });


  // this.render(__html, {
  //   title: '用户登陆',
  //   initialState: {
  //     user: [
  //       {
  //         name: 'aa'
  //       }, {
  //         name: 'bb'
  //       }
  //     ]
  //   },
  //   req: {
  //     path: this.path,
  //   }
  // })
})

router.get('/user/:userId', function* () {
  // let userId = this.params.userId

  // this.render(__html, {
  //   title: '用户信息',
  //   userInfo: {
  //     name: '管理员'
  //   },
  //   req: {
  //     path: this.path,
  //   }
  // })
})

router.get('/users', function* () {
  // this.render(__html, {
  //   title: '用户列表',
  //   list: [{
  //     name: '管理员'
  //   }],
  //   req: {
  //     path: this.path,
  //   }
  // })
})

module.exports = router
