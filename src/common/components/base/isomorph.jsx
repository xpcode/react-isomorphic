import React from 'react'
import { Router, Route, IndexRoute, createMemoryHistory, browserHistory, match } from 'react-router'
import { Provider } from 'react-redux'
import { syncHistoryWithStore } from 'react-router-redux'

import configureStore from '../../redux/configureStore'
import routes from '../../redux/routes'

export default class Isomorph extends React.Component {
  static createStore = initialState => configureStore(initialState);

  static createHistory = (store, path) => process.env.__CLIENT__ === true ? syncHistoryWithStore(browserHistory, store) : createMemoryHistory(path);

  render() {
    if (process.env.__CLIENT__ === true) {
      console.log('未解决：浏览器重新渲染的问题')
    }

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
