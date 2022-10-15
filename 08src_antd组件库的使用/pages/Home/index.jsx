import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'
import MyNavLink from '../../Components/MyNavLink'
import News from './pages/News'
import Message from './pages/Message'

export default class Home extends Component {
  render() {
    return (
      <div>
        <h3>我是Home的内容</h3>
        <div>
          <ul className="nav nav-tabs">
            <li>
              <MyNavLink to="/home/news">News</MyNavLink>
            </li>
            <li>
              <MyNavLink to="/home/message">Message</MyNavLink>
            </li>
          </ul>
        </div>
        <Route path="/home/news" component={News}/>
        <Route path="/home/message" component={Message}/>
        <Redirect to="/home/news" />
      </div>
    )
  }
}
