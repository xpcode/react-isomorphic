import "es6-promise"
import React from 'react'
import ReactDOM from 'react-dom'
import Immutable from 'immutable'
import { match } from 'react-router'

import { BaseIsomorph } from '../common/components'
import routes from '../common/redux/routes'

import './styles/default/login.less'
import 'antd/lib/style/index'

const finalState = {}
const {
  routing,
  ...reducers
} = window.__INITIAL_STATE__ || {}

if (reducers) {
  for (let p in reducers) {
    let reducer = reducers[p]
    finalState[p] = Immutable.fromJS(reducer)
  }
}

const store = BaseIsomorph.createStore(finalState)
const history = BaseIsomorph.createHistory(store)

const rootElement = document.getElementById('container')
const { pathname, search, hash } = window.location
const location = `${pathname}${search}${hash}`

// ReactDOM.unmountComponentAtNode(rootElement)

console.log('未解决：动态路由的前后端配置')

match({ routes, location }, (error, redirectLocation, renderProps) => {
  ReactDOM.render(
    <BaseIsomorph store={store} history={history}/>,
    rootElement
  )
})

if (module.hot) {
  module.hot.accept()
}
