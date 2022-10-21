// import React, { Component } from 'react'
// import root from '../../index'

// class DemoEffectHook extends Component {
//   state = { count: 0 }
//   componentDidMount() {
//     this.timer = setInterval(() => {
//       this.setState({
//         count: this.state.count + 1
//       })
//     }, 500)
//   }
//   componentWillUnmount() {
//     clearInterval(this.timer)
//   }
//   deleteComponent = () => {
//     root.unmount()
//   }
//   render() {
//     return (
//       <div id='demoEffectHook'>
//         <h2>DemoEffectHook</h2>
//         <h4>count: {this.state.count}</h4>
//         <button onClick={this.deleteComponent}>清除组件</button>
//       </div>
//     )
//   }
// }

import React, {useEffect, useState} from 'react'
import root from '../../index'

function DemoEffectHook() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    let timer = setInterval(() => {
      setCount(count => count + 1)
    }, 1000)
    return () => {
      console.log('unmount...');
      clearInterval(timer)
    }
  }, [])

  const deleteComponent = () => {
    root.unmount()
  }

  return (
    <div id='demoEffectHook'>
      <h2>DemoEffectHook</h2>
      <h4>count: {count}</h4>
      <button onClick={deleteComponent}>清除组件</button>
    </div>
  )
}

export default DemoEffectHook
