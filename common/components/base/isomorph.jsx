import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'
import { Provider } from 'react-redux'

import routes from '../../routes'
import platform from '../../utils/platform'

export default class Isomorph extends React.Component {
  render() {
    const {
      store,
      history,
      initialState,
    } = this.props

    return (
      <Provider store={store}>
        <Router history={history} routes={routes}/>
      </Provider>
    )
  }
}
