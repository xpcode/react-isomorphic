import "es6-promise"
import React from 'react'
import ReactDOM from 'react-dom'
import { browserHistory, match } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import configureStore from '../common/utils/configureStore'
import Isomorph from '../common/components/base/isomorph'
import routes from '../common/routes'

const store = configureStore(window.__INITIAL_STATE__)
const history = syncHistoryWithStore(browserHistory, store)
const rootElement = document.getElementById('container')
const _props = {
  store,
  history,
}

const { pathname, search, hash } = window.location;
const location = `${pathname}${search}${hash}`;

// ReactDOM.unmountComponentAtNode(rootElement)

console.log('未解决：异步路由的前后端配置')

match({ routes, location }, () => {
  ReactDOM.render(
    <Isomorph {..._props}/>,
    rootElement
  )
})

if (module.hot) {
  module.hot.accept()
}
