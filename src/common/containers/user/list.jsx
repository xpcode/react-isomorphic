import React from 'react'
import { connect } from 'react-redux'

export default class UserList extends React.Component {
  componentDidMount() {
    // this.constructor.fetchUsers()
  }

  render() {
    return (
      <div>
        <span>11</span>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log(state)
  return {
    user: state.user
  }
}

module.exports = connect(mapStateToProps)(UserList)
