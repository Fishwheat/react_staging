// import React, { Component } from 'react'

// class DemoStateHook extends Component {
//   state = {count: 0}
//   addCount = () => {
//     this.setState({count: this.state.count + 1})
//   }
//   render() {
//     return (
//       <div>
//         <h2>我是DemoStateHook组件</h2>
//         <h4>count: {this.state.count}</h4>
//         <button onClick={this.addCount}>+1</button>
//       </div>
//     )
//   }
// }

import React from 'react'

function DemoStateHook() {
  const [count, setCount] = React.useState(0)
  const addCount = () => {
    // 第一种写法
    // setCount(count+1)

    // 第二种写法
    setCount(count => {
      console.log(count, '@');
      return count+1
    })
  }

  return (
    <div>
      <h2>我是DemoStateHook组件</h2>
      <h4>count: {count}</h4>
      <button onClick={addCount}>+1</button>
    </div>
  )
}

export default DemoStateHook
