import Immutable from 'immutable'
import fetch from 'isomorphic-fetch'

import urls from '../../helpers/urls'


export default ($$state = Immutable.fromJS({

}), action) => {
  switch (action.type) {
    case ACTION_FETCH_METADATA_SUCCESS:
      return $$state.merge(action.payload)

    default:
      return $$state
  }
}


export const ACTION_FETCH_METADATA = 'ACTION_FETCH_METADATA'  // 获取元数据
export const ACTION_FETCH_METADATA_SUCCESS = 'ACTION_FETCH_METADATA_SUCCESS'
export const ACTION_FETCH_METADATA_FAILURE = 'ACTION_FETCH_METADATA_FAILURE'

export const fetchMetaData_server = () => {
  return {
    type: ACTION_FETCH_METADATA_SUCCESS,
    payload: {
      view: require('../../../data/viewmodel'),
      viewModel: require('../../../data/viewmodel')
    }
  }
}

export const fetchMetaData = (metaId) => {
  const _fetchMetaData = (type, data) => {
    return {
      type,
      payload: data
    }
  }

  return (dispatch, getState) => {
    console.log(getState())

    // fetching
    dispatch(login(ACTION_FETCH_METADATA))

    let options = {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        metaId,
      })
    }

    fetch(urls.USER_FETCH_METADATA, options)
      .then(function (response) {
        console.log(response)
        if (response.status >= 400) {
          throw new Error("Bad response from server")
        }
        return response.json()
      })
      .then(function (json) {
        console.log(json)
        dispatch(_fetchMetaData(ACTION_FETCH_METADATA_SUCCESS, json))
      })
  }
}
