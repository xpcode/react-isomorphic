import React from 'react'
import ReactDOMServer from 'react-dom/server'
import beautify from 'js-beautify'
import copy from 'copy-to'
import html from './html'

export default function viewhook(_options = { beautify: true, internals: true }) {
  const options = {}
  copy(_options).to(options)

  return function* (next) {
    this.render = function (component, pageInfo, internals = options.internals || true) {
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

      this.type = 'html';
      this.body = html(pageInfo, markup, component.props.store.getState())
    }

    yield next
  }
}
