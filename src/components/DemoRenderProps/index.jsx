import React, { Component } from 'react'
import './index.css'

export default class DemoRenderProps extends Component {
  render() {
    return (
      <div className='parent'>
        <h2>我是DemoRenderProps组件</h2>
        <A render={data => <B person={data} />}></A>
      </div>
    )
  }
}

class A extends Component {
  state = {
    person: {
      name: 'tom',
      age: 30
    }
  }
  render() {
    return (
      <div className='a'>
        <h3>我是子组件A</h3>
        {this.props.render(this.state.person)}
      </div>
    )
  }
}

class B extends Component {
  render() {
    console.log(this);
    return (
      <div className='b'>
        <h3>我是子组件B</h3>
        {this.props.person.name}---{this.props.person.age}
      </div>
    )
  }
}
