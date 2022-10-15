import React, { Component } from 'react'
import Child from './child'

export default class parent extends Component {
  render() {
    return (
      <div>
        <h2>我是Parent组件</h2>
        <Child />
      </div>
    )
  }
}
