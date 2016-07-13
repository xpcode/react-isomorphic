import React from 'react'
import { connect } from 'react-redux'
import { fetchMetadata } from '../../redux/modules/meta';

class IndexPage extends React.Component {
  render() {
    return (
      <div>11111111111
      </div>
    )
  }

  componentDidMount() {
    this.props.fetchMetadata()
  }

}

const mapStateToProps = (state, ownProps) => {
  return {
    meta: state.meta
  }
}

module.exports = connect(mapStateToProps, {
  fetchMetadata,
})(IndexPage)
