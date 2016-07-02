import React from 'react'
import { Router } from 'react-router'
import { Provider } from 'react-redux'

import routes from '../routes'

export default class RootComponent extends React.Component {
  static propTypes = {
    store: React.PropTypes.object.isRequired,
    history: React.PropTypes.object.isRequired
  };

  render() {
    const {
      store,
      history
    } = this.props

    return (
      <Provider store={store}>
        <Router history={history} routes={routes}/>
      </Provider>
    )
  }
}
