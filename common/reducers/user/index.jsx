import Immutable from 'immutable'

export const initialState = {
  loginStatus: -1,  // -1：未登陆；0：登录中；1：已登录；
  info: {
    id: null,
    cname: null,
  },
  list: [],
}

export default function user($$state = Immutable.fromJS(initialState), action) {
  switch (action.type) {
    default:
      return $$state
  }
}
