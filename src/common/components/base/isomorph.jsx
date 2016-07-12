import React from 'react'
import { Router, Route, IndexRoute, createMemoryHistory, browserHistory, match } from 'react-router'
import { Provider } from 'react-redux'
import { syncHistoryWithStore } from 'react-router-redux'

import configureStore from '../../utils/configureStore'
import routes from '../../routes'
import platform from '../../utils/platform'

class Isomorph extends React.Component {
  static createStore = initialState => configureStore(initialState);

  static createHistory = (store, path) => platform.isBrowser ? syncHistoryWithStore(browserHistory, store) : createMemoryHistory(path);

  render() {
    const {
      store,
      history,
    } = this.props

    return (
      <Provider store={store}>
        <Router history={history} routes={routes}/>
      </Provider>
    )
  }
}

module.exports = Isomorph
