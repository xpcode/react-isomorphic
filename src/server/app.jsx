import Koa from 'koa'
import serve from 'koa-static'
import path from 'path'

import {
  viewhook,
  matchRoute,
} from './middlewares'
import router from './controllers'
import routes from '../common/routes'

new Koa()
  .use(viewhook())
  .use(matchRoute(routes))
  .use(router.routes())
  .use(router.allowedMethods())
  .use(serve(path.join(__dirname, '../../static')))
  .listen(3003)

console.log('listening on port 3003 --', process.env.NODE_ENV)
