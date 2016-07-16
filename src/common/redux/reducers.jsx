import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'

import user from './modules/user'

export default combineReducers({
  user,
  routing,
})
