import React, { Component, PropTypes } from 'react'
import { Button } from 'antd'

export default class Control extends Component {
  static propTypes = {
    ctrlType: PropTypes.string.isRequired,
    name: PropTypes.string,
    title: PropTypes.string,
    entity: PropTypes.string,
    field: PropTypes.string,
  }

  render() {
    const {
      name,
      title,
      entity,
      field,
      ctrlType,
    } = this.props

    if (ctrlType === 'Button') {
      return <Button onClick={e => handleClick(e, entity) }>{title}</Button>
    }

    return null
  }
}
