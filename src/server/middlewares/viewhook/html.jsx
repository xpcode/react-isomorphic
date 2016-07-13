import path from 'path'
import env from '../../../env'

const baseUrl = process.env.NODE_ENV !== 'production' ?
  env.SCRIPT_BASEURL_DEV :
  env.SCRIPT_BASEURL_PROD

module.exports = function html(pageInfo, content, state) {
  return `
      <html>
        <head>
          <meta charSet="utf-8"/>
          <title>${pageInfo.title}</title>
          <meta name="description" content=${pageInfo.description}/>
          <meta name="keyword" content=${pageInfo.keyword}/>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
          <link href="${baseUrl}/static/styles/bootstrap/3.3.5/css/bootstrap.min.css" rel="stylesheet" type="text/css" />
          <link href="${baseUrl}/static/styles/default/index.css" rel="stylesheet" type="text/css" />
        </head>
        <body>
          <div id="container">
            ${content}
          </div>
          <script>
            window.__INITIAL_STATE__ = ${JSON.stringify(state)}
          </script>
          <script src="${baseUrl}/static/scripts/index.min.js"></script>
        </body>
      </html>
    `
}
