export default function html(pageInfo, content, state) {
  return `
      <html>
        <head>
          <meta charSet="utf-8"/>
          <title>${pageInfo.title}</title>
          <meta name="description" content=${pageInfo.description}/>
          <meta name="keyword" content=${pageInfo.keyword}/>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
          <link href="/styles/bootstrap/3.3.5/css/bootstrap.min.css" rel="stylesheet" type="text/css" />
          <link href="/styles/default/login.css" rel="stylesheet" type="text/css" />
        </head>
        <body>
          <div id="container">
            ${content}
          </div>
          <script>
            window.__INITIAL_STATE__ = ${JSON.stringify(state)}
          </script>
          <script src="http://localhost:3004/scripts/bundle.js"></script>
        </body>
      </html>
    `
}
