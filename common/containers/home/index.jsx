import React from 'react'
import HtmlBase from 'common/components/base/__html'

export default class Index extends React.Component {
  render() {
    console.log('IndexComponent props: ', this.props)

    return (
      <HtmlBase {...this.props}>
        <h1>demo</h1>
      </HtmlBase>
    )
  }
}
