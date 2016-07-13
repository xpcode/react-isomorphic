import Koa from 'koa'
import serve from 'koa-static'
import path from 'path'
import viewhook from './middlewares/viewhook'
import matchRoute from './middlewares/matchRoute'
import router from './controllers'
import routes from '../common/redux/routes'

new Koa()
  .use(viewhook())
  .use(matchRoute(routes))
  .use(router.routes())
  .use(router.allowedMethods())
  .use(serve(path.join(process.cwd(), 'static')))
  .listen(3003)

console.log('listening on port 3003 --', process.env.NODE_ENV, process.env.__SERVER__, process.env.__CLIENT__)
