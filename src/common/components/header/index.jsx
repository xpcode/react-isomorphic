import React from 'react'
import { Link } from 'react-router'

export default class Header extends React.Component {
  render() {
    return (
      <div>
        <div>
          <img src="" alt=""/>
          <span>lisa</span>
        </div>
        <div>
          <ul>
            <li><Link to="/user/login">登陆</Link></li>
            <li><Link to="/user/1">测试</Link></li>
            <li>审批</li>
            <li>日程1</li>
          </ul>
        </div>
      </div>
    )
  }
}
