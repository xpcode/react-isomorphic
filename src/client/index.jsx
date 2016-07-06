import "es6-promise"
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { browserHistory, Router } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import configureStore from '../common/utils/configureStore'
import Isomorph from '../common/components/base/isomorph'

const store = configureStore(window.__INITIAL_STATE__)
const history = syncHistoryWithStore(browserHistory, store)
const rootElement = document.getElementById('container')
const _props = {
  store,
  history,
}

ReactDOM.unmountComponentAtNode(rootElement)
ReactDOM.render(
  <Isomorph {..._props}/>,
  rootElement
)

if (module.hot) {
  module.hot.accept()
}
