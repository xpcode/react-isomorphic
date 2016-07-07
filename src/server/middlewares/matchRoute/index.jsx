import { match } from 'react-router'

export default (routes) => {
  return function* (next) {
    match({
      routes,
      location: this.req.url
    },
      (error, redirectLocation, renderProps) => {
        if (redirectLocation) {
          this.res.redirect(redirectLocation.pathname + redirectLocation.search)

        } else if (error) {
          console.error('ROUTER ERROR:', error)
          this.res.status(500)
          this.body = '500'

        } else if (renderProps) {
          // 交给后端 controller 处理

        } else {
          this.body = "404";
        }
      })

    yield next
  }
};
