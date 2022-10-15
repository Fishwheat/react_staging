import React, { Component } from 'react'

export default class Count extends Component {
  increment = () => {
    const selectNumber = this.selectDom.value
    this.props.increment(selectNumber * 1)
  }
  decrement = () => {
    const selectNumber = this.selectDom.value
    this.props.decrement(selectNumber * 1)
  }
  incrementIfAdd = () => {
    const selectNumber = this.selectDom.value
    const currentCount = this.props.count
    if (!(currentCount % 2 === 0)) {
      this.props.increment(selectNumber * 1)
    }
  }
  incrementSync = () => {
    const selectNumber = this.selectDom.value
    this.props.asyncIncrement(selectNumber * 1, 500)
  }
  render() {
    console.log(this.props)
    return (
      <div>
        <h1>Count: {this.props.count}</h1>
        <select ref={e => this.selectDom = e}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>&nbsp;
        <button onClick={this.increment}>+</button>&nbsp;
        <button onClick={this.decrement}>-</button>&nbsp;
        <button onClick={this.incrementIfAdd}>限制当前Count为基数才能+</button>&nbsp;
        <button onClick={this.incrementSync}>异步+</button>
      </div>
    )
  }
}
