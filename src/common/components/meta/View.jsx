import React, { Component, PropTypes } from 'react'
import { isArray } from 'lodash'

import Control from './Control'

export default class View extends Component {
  static propTypes = {
    type: PropTypes.string.isRequired,
    name: PropTypes.string,
    containers: PropTypes.array,
    controls: PropTypes.array,
  }

  static defaultProps = {
    containers: [],
    controls: [],
  }

  render() {
    const {
      cTplGroupName,
      iOrder,
      bMain,
      cGroupControlType,
      controls,
      containers,
    } = this.props

    let renderString = null

    if (containers.length > 0) {
      renderString = containers.map((item, i) => <View {...item} key={`view_${i}`} />)

    } else if (cGroupControlType === 'TabPage') {
      renderString = controls.map((item, i) => <Control {...item} key={`control_${i}`} />)
    }

    return <div>{renderString}</div>
  }
}
