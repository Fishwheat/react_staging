import React, { Component } from 'react'
import Child from './child'

export default class parent extends Component {
  state = {
    hasError: ''
  }
  static getDerivedStateFromError(error) {
    return { hasError: error }
  }
  componentDidCatch() {
    console.log('子组件报错了');
  }
  render() {
    return (
      <div>
        <h2>我是Parent组件</h2>
        { this.state.hasError ? <h2>当前网络不稳定</h2> : <Child /> }
      </div>
    )
  }
}
