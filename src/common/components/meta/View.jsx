import React, { Component, PropTypes } from 'react'
import { isArray } from 'lodash'

import Control from './Control'

export default class Container extends Component {
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
      name,
      type,
      iCols,
      controls,
      containers,
    } = this.props

    let renderString = null

    if (containers.length > 0) {
      renderString = containers.map(item => <Container {...item} key={item.type + item.name} />)

    } else if (type === 'Toolbar') {
      renderString = controls.map(item => <Control {...item} key={item.type + item.name} />)
    }

    return <div>{renderString}</div>
  }
}
