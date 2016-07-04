import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'

import component from './component'
import user from './user'

const rootReducer = combineReducers({
  user,
  component,
  routing,
})

export default rootReducer
