import React from 'react'
import {
  Header,
  Footer,
  HtmlBase,
} from '../../components'

export default class UserInfo extends React.Component {
  render() {
    return (
      <HtmlBase {...this.props}>
        <Header/>
        <span>UserInfo1</span>
        <Footer/>
      </HtmlBase>
    )
  }
}
