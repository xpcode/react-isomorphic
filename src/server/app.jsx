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
  .use(serve(path.join(__dirname, 'public')))  // Serve static files
  .use(logger())
  .use(compress())
  .listen(3003)

console.log('listening on port 3003 -- NODE_ENV', process.env.NODE_ENV)


if (process.env.NODE_ENV !== 'production') {
  var webpack = require('webpack')
  var webpackDevConfig = require('../../webpack.dev.config.js')
  var compiler = webpack(webpackDevConfig)

  app
    .use(require("koa-webpack-dev-middleware")(compiler, {
      publicPath: webpackDevConfig.output.publicPath,
      noInfo: false,
      internals: true,
      stats: {
        colors: true
      }
    }))
    .use(require("koa-webpack-hot-middleware")(compiler))
}
