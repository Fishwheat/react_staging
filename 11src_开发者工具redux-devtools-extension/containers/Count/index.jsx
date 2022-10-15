import React, { Component } from 'react'
import { connect } from 'react-redux'
import { increment, decrement, incrementAsync } from '../../redux/actions/count'

class Count extends Component {
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
    this.props.incrementAsync(selectNumber * 1, 500)
  }
  render() {
    return (
      <div>
        <h2>我是Count组件, 总人数为：{this.props.personsLength}</h2>
        <h4>Count: {this.props.count}</h4>
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

export default connect(
  state => ({count: state.count, personsLength: state.persons.length}),
  {
    increment,
    decrement,
    incrementAsync,
  }
)(Count)
