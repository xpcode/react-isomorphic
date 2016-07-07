import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'

import {
  Login,
  UserInfo,
  UserList,
} from '../containers'

const requireAuthentication = (nextState, replace, cb) => {
  // loadUserInfo(store)
  //   .then((user) => {
  //     if (!user) replace('/login')
  //     cb()
  //   })
  //   .catch(err) {
  //   cb(err)
  // }
}

export default (
  <Route path="/">
    <IndexRoute/>
    <Route path="user">
      <Route path="login" component={Login} />
      <Route path=":id" component={UserInfo} />
    </Route>
    <Route path="users" component={UserList} onEnter={requireAuthentication} />
  </Route>
)
