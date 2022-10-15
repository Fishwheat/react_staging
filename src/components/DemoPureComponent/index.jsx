import React, { PureComponent } from 'react'

export default class DemoPureComponent extends PureComponent {
  state = {carName: '法拉利'}
  changeCar = () => {
    // this.setState({carName: '保时捷'})
    this.setState({})
  }

  render() {
    return (
      <div>
        <h2>DemoPureComponent组件</h2>
        <div>{this.state.carName}</div>
        <button onClick={this.changeCar}>换车</button>
        <A />
        <A carName={this.state.carName}/>
      </div>
    )
  }
}

class A extends PureComponent {

  render() {
    // console.log(123);
    return (
      <div>
        a...
      </div>
    )
  }
}

// function A() {
//   console.log('123');
//   return (
//     <div>a...</div>
//   )
// }

