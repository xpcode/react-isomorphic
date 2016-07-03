import "es6-promise"
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { browserHistory, Router } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import configureStore from 'client/store/configureStore'
import routes from 'client/routes'

const store = configureStore(window.__INITIAL_STATE__)
const history = syncHistoryWithStore(browserHistory, store)
const rootElement = document.getElementById('container')

ReactDOM.unmountComponentAtNode(rootElement)
ReactDOM.render(
  <Provider store={store}>
    <Router history={history} routes={routes}/>
  </Provider>,
  rootElement
)

if (module.hot) {
  module.hot.accept()
}
