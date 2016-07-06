import React from 'react'
import { createStore } from 'redux'
import { browserHistory, createMemoryHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import configureStore from '../../utils/configureStore'
import platform from '../../utils/platform'
import Isomorph from './isomorph'

export default class HtmlBase extends React.Component {
  render() {
    if(platform.isServer === true){
      console.log('__html props: ', JSON.stringify(this.props))
    }

    const {
      title,
      keyword,
      description,
      initialState,
      req,
    } = this.props

    const store = configureStore(initialState)

    const history = platform.isBrowser ?
      syncHistoryWithStore(browserHistory, store) :
      createMemoryHistory(req.path)

    const _props = {
      store,
      history,
    }

    const scriptInnerHtml = `window.__INITIAL_STATE__ = ${JSON.stringify(store.getState())};`

    return (
      <html>
        <head>
          <meta charSet="utf-8"/>
          <title>{title}</title>
          <meta name="description" content={description}/>
          <meta name="keyword" content={keyword}/>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
          <link href="/styles/bootstrap/3.3.5/css/bootstrap.min.css" rel="stylesheet" type="text/css" />
          <link href="/styles/default/login.css" rel="stylesheet" type="text/css" />
        </head>
        <body>
          <div id="container">
            <Isomorph {..._props}/>
          </div>
          <script dangerouslySetInnerHTML={{ __html: scriptInnerHtml }}></script>
          <script src="http://localhost:3004/build/main.js"></script>
        </body>
      </html>
    )
  }
}
