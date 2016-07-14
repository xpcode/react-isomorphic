import React, { Component, PropTypes } from 'react'
import { isArray } from 'lodash'
import { Form, Input, Row, Col, Button, DatePicker, Table } from 'antd'
import Control from './Control'

const FormItem = Form.Item

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

    let components = null

    if (containers.length > 0) {
      components = containers.map((item, i) => <View {...item} key={`view_${i}`} />)
    } else {

      if (cGroupControlType === 'Table') {
        components = this.renderTable(controls)

      } else if (cGroupControlType === 'Header') {
        components = this.renderHeader(controls)

      } else if (cGroupControlType === 'Footer') {

      } else {
        components = controls.map((item, i) => <Control {...item} key={`control_${i}`} />)
      }
    }
    return <div>{components}</div>
  }

  renderHeader(controls) {
    const copyControls = [].concat(controls)
    const colArray = [[], [], []]

    let ctl = null, i = 0;
    while (ctl = copyControls.shift()) {
      colArray[i].push(ctl)

      if (++i > 2) i = 0
    }

    const colComponents = colArray.map((col, i) => {
      const formItemComponents = col.map((item, j) => {
        return (
          <FormItem
            label={item.cShowCaption}
            labelCol={{ span: 10 }}
            wrapperCol={{ span: 14 }}
            >
            <Control {...item} key={`fi-ctl-${i}-${j}`} />
          </FormItem>
        )
      })
      return <Col sm={8}>{formItemComponents}</Col>
    })

    return (
      <Form horizontal className="ant-advanced-search-form">
        <Row gutter={16}>
          {colComponents}
        </Row>
      </Form>
    )
  }

  renderTable(controls) {
    const columns = controls.map((item, i) => {
      return {
        title: item.cShowCaption,
        dataIndex: item.cItemName,
        key: `${item.cShowCaption}-${i}`,
      }
    })
    const dataSource = [{
      key: '1',
      name: '胡彦斌',
      age: 32,
      address: '西湖区湖底公园1号'
    }, {
        key: '2',
        name: '胡彦祖',
        age: 42,
        address: '西湖区湖底公园1号'
      }]
    return <Table dataSource={dataSource} columns={columns} />
  }
}
