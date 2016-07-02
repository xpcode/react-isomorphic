import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'

import components from './components'

const rootReducer = combineReducers({
  components,
  routing,
})

export default rootReducer
