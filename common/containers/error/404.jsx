import React from 'react'
import {
  Header,
  Footer,
  PageNotFound,
} from '../../../common/components'

export default class Error404 extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <PageNotFound/>
        <Footer/>
      </div>
    )
  }
}
