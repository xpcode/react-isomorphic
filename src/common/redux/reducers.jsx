import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'

import user from './modules/user'
import meta from './modules/meta'

const rootReducer = combineReducers({
  user,
  routing,
})

export default rootReducer
