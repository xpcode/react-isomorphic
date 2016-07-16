import React from 'react'
import { connect } from 'react-redux'
import { Table } from 'antd'

import {
  queryUserBy
} from '../../redux/modules/user'

class UserList extends React.Component {
  componentDidMount() {
    this.props.queryUserBy()
  }

  render() {
    const {
      dataSource,
      columns,
    } = this.props.user

    return (
      <Table dataSource={dataSource} columns={columns} />
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.user.toJS()
  }
}

export default connect(mapStateToProps, {
  queryUserBy
})(UserList)
