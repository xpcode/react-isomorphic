import "es6-promise"
import React from 'react'
import ReactDOM from 'react-dom'
import Immutable from 'immutable'
import { match } from 'react-router'

import Isomorph from '../common/components/base/isomorph'
import routes from '../common/redux/routes'

import './styles/default/login.less'

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

const store = Isomorph.createStore(finalState)
const history = Isomorph.createHistory(store)

const rootElement = document.getElementById('container')
const { pathname, search, hash } = window.location
const location = `${pathname}${search}${hash}`

// ReactDOM.unmountComponentAtNode(rootElement)

console.log('未解决：动态路由的前后端配置')

match({ routes, location }, (error, redirectLocation, renderProps) => {
  ReactDOM.render(
    <Isomorph store={store} history={history}/>,
    rootElement
  )
})

if (module.hot) {
  module.hot.accept()
}
