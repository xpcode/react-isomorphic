import React from 'react'
import { connect } from 'react-redux'
import { isArray } from 'lodash'

import { fetchMetadata } from '../../redux/modules/meta';
import View from '../../components/meta/View'
import ViewModel from '../../components/meta/ViewModel'

class Voucher extends React.Component {
  render() {
    const {
      viewApplication,
      viewmodel,
    } = this.props.meta

    return (
      <div>
        <View {...viewApplication.view} key="view_root" />
        <ViewModel {...viewmodel} key="viewmodel_root" />
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

export default connect(mapStateToProps, {
  fetchMetadata,
})(Voucher)
