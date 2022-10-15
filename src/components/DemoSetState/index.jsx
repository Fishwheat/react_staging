import React, { Component } from 'react'

export default class DemoSetState extends Component {
  state = {num: 0}

  addNum = () => {
    // setState的第二个参数是一个回调（可省略），在回调内可拿到变化后的state值

    // setState 第一种写法
    const { num } = this.state
    this.setState({num: num + 1}, () => {console.log(this.state.num)})

    this.setState({num: num + 1}) // 简写

    // setState 第二种写法
    this.setState((state, props) => {
      console.log(state, props);
      return ({num: state.num + 1})
    }, () => {
      console.log(this.state.num);
    })

    this.setState((state) => ({num: state.num + 1})) // 简写

  }

  render() {
    return (
      <div>
        <h2>我是DemoSetState组件</h2>
        <h4>可变化的数字num：{this.state.num}</h4>
        <button onClick={this.addNum}>点击num+1</button>
      </div>
    )
  }
}
