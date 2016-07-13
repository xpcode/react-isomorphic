import React from 'react'
import {
  ACTION_FETCH_METADATA_SUCCESS,
  fetchMetaData,
} from '../../common/redux/modules/meta'

export default function (router) {

  router.get('/meta/:metaId', function (ctx) {
    const metaId = ctx.params.metaId

    const pageInfo = {
      title: '元数据',
      keyword: '',
      description: '',
    }

    const mock = require('../../data/viewmodel')

    ctx.store.dispatch({
      type: ACTION_FETCH_METADATA_SUCCESS,
      payload: {
        viewApplication: mock.data.viewApplication,
        viewmodel: mock.data.viewmodel
      }
    })

    ctx.render(pageInfo)
  })

  return router
}
