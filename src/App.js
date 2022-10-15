import React, { Component, lazy, Suspense } from 'react'
import { NavLink, Route } from 'react-router-dom'
import DemoSetState from './components/DemoSetState'
import DemoStateHook from './components/DemoStateHook'
import DemoEffectHook from './components/DemoEffectHook'
import DemoRefHook from './components/DemoRefHook'
import FragmentTest from './components/Fragment'
import DemoContext from './components/DemoContext'
import DemoPureComponent from './components/DemoPureComponent'
import DemoRenderProps from './components/DemoRenderProps'
import DemoErrorBound from './components/DemoErrorBound/parent'

// import Home from './pages/Home'
// import About from './pages/About'
import Loading from './components/Loading'
const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))

export default class App extends Component {
  render() {
    return (
      <div>
        <DemoSetState test="test"/>
        <hr />
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <div className="page-header"><h2>React Router Demo</h2></div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              <NavLink activeClassName='active' className="list-group-item" to="/about">About</NavLink>
              <NavLink activeClassName='active' className="list-group-item" to="/home">Home</NavLink>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                <Suspense fallback={<Loading />}>
                  <Route path="/about" component={About}/>
                  <Route path="/home" component={Home}/>
                </Suspense>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <DemoStateHook />
        <hr />
        <DemoEffectHook />
        <hr />
        <DemoRefHook />
        <hr />
        <FragmentTest />
        <hr />
        <DemoContext />   
        <hr />
        <DemoPureComponent />
        <hr />
        <DemoRenderProps />  
        <hr />
        <DemoErrorBound />  
      </div>
    )
  }
}
