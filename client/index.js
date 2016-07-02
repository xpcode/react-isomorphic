import "es6-promise"
import React from 'react'
import ReactDOM from 'react-dom'
import { browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import configureStore from 'client/store/configureStore'
import RootComponent from 'client/components/root'

const store = configureStore()
const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
  <RootComponent store={store} history={history}/>,
  document.getElementById('container')
)

if (module.hot) {
  module.hot.accept()
}
