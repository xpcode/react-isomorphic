import React from 'react'
import { fetchMetaData } from '../../common/redux/modules/meta'

module.exports = router => {

  router.get('/meta/:metaId', function (ctx) {
    const metaId = ctx.params.metaId

    const pageInfo = {
      title: '元数据',
      keyword: '',
      description: '',
    }

    // TODO: 调用 dispatch，store 会得到数据
    fetchMetaData(metaId)
    // store.dispatch({type: ACTION_USER_GET_LIST})

    ctx.render(pageInfo)
  })

  return router
}
