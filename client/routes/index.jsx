import React from 'react'
import { Route } from 'react-router'

import {
  PageNotFound,
  UserInfo,
  UserList,
  Login,
} from 'common/containers'

export default (
  <Route path="/">
    <Route path="user">
      <Route path="login" component={Login} />
      <Route path=":id" component={UserInfo} />
    </Route>
    <Route path="users" component={UserList} />
    <Route path="*" component={PageNotFound} />
  </Route>
)
