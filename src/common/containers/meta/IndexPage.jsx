import React from 'react'
import { connect } from 'react-redux'
import { isArray } from 'lodash'

import { fetchMetadata } from '../../redux/modules/meta';
import View from '../../components/meta/View'
import ViewModel from '../../components/meta/ViewModel'

class IndexPage extends React.Component {
  render() {
    const {
      viewApplication,
      viewmodel,
    } = this.props.meta

    return (
      <div>
        <View {...viewApplication.view} key="view" />
        <ViewModel {...viewmodel} key="viewmodel" />
      </div>
    )
  }

  componentDidMount() {
    // this.props.fetchMetadata()
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    meta: state.meta.toJS()
  }
}

module.exports = connect(mapStateToProps, {
  fetchMetadata,
})(IndexPage)
