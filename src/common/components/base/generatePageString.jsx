import React from 'react'
import { createStore } from 'redux'
import { browserHistory, createMemoryHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
// import { ReactDOMServer } from 'react-dom'
var ReactDOMServer = require('react-dom/server')
var beautifyHTML = require('js-beautify').html;

import configureStore from '../../utils/configureStore'
import platform from '../../utils/platform'
import Isomorph from './isomorph'

export default function generatePageString(pageInfo, initialState) {
  const store = configureStore(initialState)

  const history = platform.isBrowser ?
    syncHistoryWithStore(browserHistory, store) :
    createMemoryHistory(pageInfo.path)

  const _props = {
    store,
    history,
  }

  const componentString = ReactDOMServer.renderToString(
    <Isomorph {..._props}/>
  )

  return beautifyHTML(`
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
          ${componentString}
        </div>
        <script>
          window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}
        </script>
        <script src="http://localhost:3004/scripts/bundle.js"></script>
      </body>
    </html>
  `)
}
