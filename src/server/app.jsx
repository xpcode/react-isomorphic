import koa from 'koa'
import compress from 'koa-compress'
import logger from 'koa-logger'
import react from 'koa-react-view'
import serve from 'koa-static'
import path from 'path'

import router from './controllers'

const app = module.exports = koa()
const viewPath = path.join(__dirname, '../common/components')

if (process.env.NODE_ENV !== 'production') {
  react(app, {
    extname: 'jsx',
    beautify: true,
    views: viewPath,
    internals: true,
  })
} else {
  react(app, {
    extname: 'js',
    views: viewPath,
    internals: true,
  })
}

app
  .use(router.routes())
  .use(router.allowedMethods())
  .use(serve(path.join(__dirname, '../../static')))  // Serve static files
  .use(logger())
  .use(compress())
  .listen(3003)

console.log('listening on port 3003 -- NODE_ENV', process.env.NODE_ENV)
