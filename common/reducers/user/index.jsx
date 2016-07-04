import Immutable from 'immutable'

const $$initialState = Immutable.fromJS({
  list: [],
  info: {
  }
})

export default function user($$state = $$initialState, action) {
  switch (action.type) {
    default:
      return $$state
  }
}
