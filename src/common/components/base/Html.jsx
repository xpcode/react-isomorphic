import React, { PropTypes } from 'react'

export default class Html extends React.Component {
  static propTyps = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    style: PropTypes.string.isRequired,
    script: PropTypes.string,
    children: PropTypes.string,
  };

  render() {
    const {
      title,
      keyword,
      description,
      baseUrl,
      initialState,
      children,
    } = this.props

    const scriptContent = JSON.stringify(initialState)

    return (
      <html>
        <head>
          <meta charSet="utf-8"/>
          <title>{title}</title>
          <meta name="description" content={description}/>
          <meta name="keyword" content={keyword}/>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
          <link href="{baseUrl}/static/styles/bootstrap/3.3.5/css/bootstrap.min.css" rel="stylesheet" type="text/css" />
          <link href="{baseUrl}/static/styles/default/index.css" rel="stylesheet" type="text/css" />
        </head>
        <body>
          <div id="container">
            {children}
          </div>
          <script>
            window.__INITIAL_STATE__ = { JSON.stringify(state) }
          </script>
          <script src="{baseUrl}/static/scripts/index.min.js"></script>
        </body>
      </html>
    )
  }
}
