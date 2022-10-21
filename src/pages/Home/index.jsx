import React from 'react'
import {NavLink, Outlet} from 'react-router-dom'

export default function Home() {
  function activeTab(isActive) {
    return isActive ? 'list-group-item active' : 'list-group-item'
  }
  return (
    <div>
      <h3>我是Home的内容</h3>
      <ul className="nav nav-tabs">
        <li>
          <NavLink className={({isActive}) => activeTab(isActive)} to="news">News</NavLink>
        </li>
        <li>
          <NavLink className={({isActive}) => activeTab(isActive)} to="message">Message</NavLink>
        </li>
      </ul>
      <div>
        <Outlet />
      </div>
    </div>
  )
}
