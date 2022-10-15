// import React, { Component } from 'react'

// class DemoRefHook extends Component {
//   inputEl = React.createRef()
//   showValue = () => {
//     console.log(this.inputEl.current.value);
//   }
//   render() {
//     return (
//       <div>
//         <input type="text" ref={this.inputEl}/>
//         <button onClick={this.showValue}>显示输入框内容</button>
//       </div>
//     )
//   }
// }

import React from 'react'

function DemoRefHook() {
  const inputEl = React.useRef()
  const showValue = () => {
    console.log(inputEl.current.value);
  }
  return (
    <div>
      <input type="text" ref={inputEl}/>
      <button onClick={showValue}>显示输入框内容</button>
    </div>
  )
}

export default DemoRefHook
