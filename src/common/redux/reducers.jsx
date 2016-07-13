import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'

import user from './modules/user'
import meta from './modules/meta'

export default combineReducers({
  user,
  meta,
  routing,
})
