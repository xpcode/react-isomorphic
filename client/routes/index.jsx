import React from 'react'
import { Route, IndexRoute } from 'react-router'

import {
  PageNotFound,
  UserInfo,
  UserList,
  Login,
} from '../../common/containers'

export default (
  <Route path="/">
    <IndexRoute component={Login}/>
    <Route path="user">
      <Route path="login" component={Login} />
      <Route path=":id" component={UserInfo} />
    </Route>
    <Route path="users" component={UserList} />
    <Route path="*" component={PageNotFound} />
  </Route>
)
