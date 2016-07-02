import React from 'react'

export default class HtmlBase extends React.Component {
  render() {
    // 判断是否在浏览器环境
    if (global.document) {
      return this.props.children
    }

    const {
      title,
      initialState,
      keyword,
      description,
      children,
    } = this.props

    const scriptInnerHtml = `window.__INITIAL_STATE__ = ${JSON.stringify(initialState)};`

    return (
      <html>
        <head>
          <meta charSet="utf-8"/>
          <title>{title}</title>
          <meta name="description" content={description}/>
          <meta name="keyword" content={keyword}/>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
          <link href="/styles/bootstrap/3.3.5/css/bootstrap.min.css" rel="Stylesheet" type="text/css" />
          <link href="/styles/default/login.css" rel="Stylesheet" type="text/css" />
        </head>
        <body>
          <div id="container">
            {children}
          </div>
          <script dangerouslySetInnerHTML={{ __html: scriptInnerHtml }}></script>
          <script src="/build/main.js"></script>
        </body>
      </html>
    )
  }
}
