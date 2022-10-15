import React, { Component } from 'react'
import store from '../../redux/store'
import { createIncrementAction, createDecrementAction, createAsyncIncrementAction } from '../../redux/count_action'

export default class Count extends Component {
  state = {count: 0}
  // componentDidMount() {
  //   store.subscribe(() => {
  //     this.setState({})
  //   })
  // }
  increment = () => {
    const selectNumber = this.selectDom.value
    // const { count } = this.state
    // this.setState({
    //   count: count + selectNumber * 1
    // })
    // store.dispatch({type: 'increment', data: selectNumber * 1})
    store.dispatch(createIncrementAction(selectNumber * 1))
  }
  decrement = () => {
    const selectNumber = this.selectDom.value
    // const { count } = this.state
    // this.setState({
    //   count: count - selectNumber * 1
    // })
    // store.dispatch({type: 'decrement', data: selectNumber * 1})
    store.dispatch(createDecrementAction(selectNumber * 1))
  }
  incrementIfAdd = () => {
    const selectNumber = this.selectDom.value
    // const { count } = this.state
    // if (!(count % 2 === 0)) {
    //   this.setState({
    //     count: count + selectNumber * 1
    //   })
    // }
    const count = store.getState()
    if (!(count % 2 === 0)) {
      store.dispatch(createIncrementAction(selectNumber * 1))
    }
  }
  incrementSync = () => {
    const selectNumber = this.selectDom.value
    // const { count } = this.state
    // setTimeout(() => {
    //   this.setState({
    //     count: count + selectNumber * 1
    //   })
    // }, 500)
    // setTimeout(() => {
    //   store.dispatch(createAsyncIncrementAction(selectNumber * 1, 500))
    // }, 500)
    store.dispatch(createAsyncIncrementAction(selectNumber * 1, 500))
  }
  render() {
    return (
      <div>
        <h1>Count: {store.getState()}</h1>
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
