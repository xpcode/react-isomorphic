import React, { Component, PropTypes } from 'react'
import { Button, Input } from 'antd'

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
      cItemName,
      cCaption,
      cShowCaption,
      iMaxLength,
      iFieldType,
      bMustSelect,
      bHidden,
      bCanModify,
      iMaxShowLen,
      iColWidth,
      iAlign,
      bShowIt,
      bIsNull,
      cControlType,
      iOrder,
      bMain,
      id,
      iParentId,
    } = this.props
    // console.log(this.props)

    if (cControlType === 'Button') {
      return <Button onClick={e => handleClick(e, entity) }>{title}</Button>

    } else if (cControlType === 'Input') {
      return <Input onClick={e => handleClick(e, entity) } />
    }

    return null
  }
}
