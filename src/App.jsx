import React, {useState} from 'react'
import {NavLink, Navigate, useLocation, useRoutes} from 'react-router-dom'
import routes from './routes'
import './app.css'

export default function App() {
  const [count, setCount] = useState(0)
  const location = useLocation()
  function activeTab(isActive) {
    return isActive ? 'list-group-item active' : 'list-group-item'
  }
  function addCount() {
    setCount(2)
  }
  const element = useRoutes(routes)
  return (
    <div>
      <div className="row">
        <div className="col-xs-offset-2 col-xs-8">
          <div className="page-header"><h2>React Router Demo</h2></div>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-2 col-xs-offset-2">
          <div className="list-group">
            <NavLink className={({isActive}) => activeTab(isActive)} to="/about">About</NavLink>
            <NavLink className={({isActive}) => activeTab(isActive)} to="/home">Home</NavLink>
          </div>
        </div>
        <div className="col-xs-6">
          <div className="panel">
            <div className="panel-body">
              <h3>{count === 2 && location.pathname !== '/home' ? <Navigate to='/home' /> : count}</h3>
              <button onClick={addCount}>点我变2然后跳到home</button>
              {element}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

