import koa from 'koa'
import compress from 'koa-compress'
import logger from 'koa-logger'
import react from 'koa-react-view'
import serve from 'koa-static'
import path from 'path'

import {
  viewhook,
  matchRoute,
} from './middlewares'
import router from './controllers'
import routes from '../common/routes'

koa()
  .use(matchRoute(routes))
  .use(viewhook())
  .use(router.routes())
  .use(router.allowedMethods())
  .use(serve(path.join(__dirname, '../../static')))  // Serve static files
  .use(logger())
  .use(compress())
  .listen(3003)

console.log('listening on port 3003 -- NODE_ENV', process.env.NODE_ENV)
