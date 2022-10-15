import React, { Component } from 'react'
import Test from './components/Test'
import Count from './containers/Count'
import Person from './containers/Person'
// import store from './redux/store'
// import Test from './components/Test'

export default class App extends Component {
  render() {
    return (
      // <Count store={store}/>
      <div>
        <Count />
        <hr />
        <Person />
        <Test />
      </div>
    )
  }
}
