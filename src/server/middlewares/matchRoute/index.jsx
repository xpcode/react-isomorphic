import { match } from 'react-router'

export default function (routes) {
  return async function (ctx, next) {

    match({ routes, location: ctx.req.url }, (error, redirectLocation, renderProps) => {
      if (redirectLocation) {
        ctx.res.redirect(redirectLocation.pathname + redirectLocation.search)

      } else if (error) {
        console.error('ROUTER ERROR:', error)
        ctx.res.status(500)
        ctx.body = '500'

      } else if (renderProps) {
        // 交给后端 controller 处理

      } else {
        ctx.body = "404";
      }
    })

    await next()
  }
};
