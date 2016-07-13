import React from 'react'
import { connect } from 'react-redux'

class UserList extends React.Component {
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
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(UserList)
