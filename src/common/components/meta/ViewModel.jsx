import React, { Component, PropTypes } from 'react'
import { isArray, isString } from 'lodash'

export default class ViewModel extends Component {
  static propTypes = {
    entities: PropTypes.array,
  }

  static defaultProps = {
    entities: [],
  }

  // 生成 viewmodel.js
  generateScript(entities) {
    let script = null

    if (process.env.NODE_ENV === 'production') {
      // 生成 js 文件到 /static/viewmodel/**.js、压缩，返回文件绝对路径
      // 确保只是首次生成
    }
    script = 'console.log("ouput viewmodel.js");'
    return script
  }

  render() {
    const {
      entities
    } = this.props

    const content = this.generateScript(entities)

    const renderScript = isString(content) ?
      <script dangerouslySetInnerHTML={{ __html: content }}></script> :
      <script src={content}></script>

    return (
      <div>
        <script src="/static/scripts/cube/0.1.0/cube.js"></script>
        {renderScript}
      </div>
    )
  }
}
