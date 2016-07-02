import { compose, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import Immutable from 'immutable'
import {
  isPlainObject,
  isFunction,
} from 'lodash'
import rootReducer from 'common/reducers'

const stateTransformer = states => {
  let finalStates = {}
  for (let key in states) {
    if (!states.hasOwnProperty(key))
      continue

    const state = states[key]

    if (Immutable.Iterable.prototype.isPrototypeOf(state) && typeof isFunction(state.toObject)) {
      finalStates[key] = state.toObject()
    } else if (isPlainObject(state)) {
      finalStates[key] = key === 'routing' ? states : stateTransformer(state)
    }
  }
  return finalStates
}

export default function configureStore(initialState) {
  const collapsed = true
  const colors = {
    title: () => `red`,
    prevState: () => `blue`,
    action: () => `orange`,
    nextState: () => `green`,
    error: () => `#F20404`,
  }
  const store = createStore(rootReducer, initialState, compose(
    applyMiddleware(thunk, createLogger({
      stateTransformer,
      collapsed,
      colors,
    })),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ))

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('common/reducers', () => {
      const nextRootReducer = require('common/reducers').default
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}
