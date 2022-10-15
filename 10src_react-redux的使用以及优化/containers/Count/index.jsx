import React, { Component } from 'react'
// import CountUI from '../../Components/Count'
import { connect } from 'react-redux'
import { createIncrementAction, createDecrementAction, createAsyncIncrementAction } from '../../redux/count_action'

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

// import CountUI from '../../Components/Count'
// import { connect } from 'react-redux'
// import store from '../../redux/store'
// import { createIncrementAction, createDecrementAction, createAsyncIncrementAction } from '../../redux/count_action'

// 映射状态到 props
// const mapStateToProps = (state = store.getState()) => {
//   return {count: state}
// }

// 映射操作状态的方法到 props
// const mapDispatchToProps = () => {
//   return {
//     increment: (selectNumber) => {
//       store.dispatch(createIncrementAction(selectNumber))
//     },
//     decrement: (selectNumber) => {
//       store.dispatch(createDecrementAction(selectNumber))
//     },
//     asyncIncrement: (selectNumber) => {
//       store.dispatch(createAsyncIncrementAction(selectNumber, 500))
//     }
//   }
// }
// export default connect(mapStateToProps, mapDispatchToProps)(CountUI)
export default connect(
  state => ({count: state}),
  {
    increment: createIncrementAction,
    decrement: createDecrementAction,
    asyncIncrement: createAsyncIncrementAction,
  }
)(Count)
