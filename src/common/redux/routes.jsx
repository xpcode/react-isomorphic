import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'

import * as Pages from '../containers'

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
    <Route path="meta">
      <Route path=":metaId" component={Pages.MetaIndexPage} />
    </Route>
    <Route path="user">
      <Route path="login" component={Pages.UserLoginPage} />
      <Route path=":id" component={Pages.UserInfoPage} />
    </Route>
    <Route path="users" component={Pages.UserListPage} onEnter={requireAuthentication} />
    <Route path="*" component={Pages.ErrorNotFound} />
  </Route>
)
