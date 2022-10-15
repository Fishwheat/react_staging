import React, { Component } from 'react'

export default class Test extends Component {
  state = {num: 1}
  componentDidMount = () => {
    // setTimeout(() => {  
    //   this.setState({
    //     num: +new Date()
    //   }, () => {
    //     console.log(1, this.state.num);
    //   })
    //   console.log(0, this.state.num);
    // }, 20)
    
    // Promise.resolve().then(() => {
    //   console.log(1, this.state.num);
    // })
    // console.log(2, this.state.num);
    // this.setState({
    //   num: +new Date()
    // }, () => {
    //   console.log(3, this.state.num);
    // })
    // console.log(4, this.state.num);
  }
  addNum = () => {
    Promise.resolve().then(() => {
      console.log(1, this.state.num);
    })
    console.log(2, this.state.num);
    this.setState({
      num: +new Date()
    }, () => {
      console.log(3, this.state.num);
    })
    console.log(4, this.state.num);
  }
  render() {
    return (
      <div>
        <h2>{this.state.num}</h2>
        <button onClick={this.addNum}>add</button>
      </div>
    )
  }
}
