var React = require('react')
var ReactDOMServer = require('react-dom/server')
var beautify = require('js-beautify')
var html = require('./html')

module.exports = function viewhook(_options = { beautify: true, internals: true }) {
  const options = Object.assign({}, _options)

  return async function (ctx, next) {
    ctx.render = function (component, pageInfo, internals = options.internals || true) {
      if (!React.isValidElement(component)) {
        const err = new Error('参数错误：请传入 ReactComponent 对象')
        err.code = 'REACT'
        throw err;
      }

      const render = internals
        ? ReactDOMServer.renderToString
        : ReactDOMServer.renderToStaticMarkup

      let markup = render(component)

      if (options.beautify) {
        markup = beautify.html(markup)
      }

      ctx.type = 'html';
      ctx.body = html(pageInfo, markup, component.props.store.getState())
    }

    await next()
  }
}
