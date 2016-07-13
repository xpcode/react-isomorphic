import "es6-promise"
import React from 'react'
import ReactDOM from 'react-dom'
import { match } from 'react-router'

import Isomorph from '../common/components/base/isomorph'
import routes from '../common/redux/routes'

import './styles/default/login.less'

const store = Isomorph.createStore(window.__INITIAL_STATE__)
const history = Isomorph.createHistory(store)

const rootElement = document.getElementById('container')
const { pathname, search, hash } = window.location
const location = `${pathname}${search}${hash}`

// ReactDOM.unmountComponentAtNode(rootElement)

console.log('未解决：动态路由的前后端配置', __SERVER__, __CLIENT__)

match({ routes, location }, (error, redirectLocation, renderProps) => {
  ReactDOM.render(
    <Isomorph store={store} history={history}/>,
    rootElement
  )
})

if (module.hot) {
  module.hot.accept()
}
