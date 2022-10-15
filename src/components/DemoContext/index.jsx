import React, { Component, createContext } from 'react'

const TextContext = createContext()
const { Provider, Consumer } = TextContext

export default class DemoContext extends Component {
  state = {person: {id: '001', name: 'tom', age: 18}}
  render() {
    return (
      <div>
        <h2>我是DemoContext组件</h2>
        <Provider value={this.state}>
          <A />
        </Provider>
      </div>
    )
  }
}

class A extends Component {
  static contextType = TextContext

  render() {
    // console.log(this);
    const {person} = this.context
    return (
      <div>
        <h4>A...{person.name}---{person.age}</h4>
        <B/>
      </div>
    )
  }
}

class B extends Component {
  static contextType = TextContext

  render() {
    // const {person} = this.context
    return (
      <div>
        {/* <h4>B...{person.name}---{person.age}</h4> */}
        <Consumer>
          {
            value => <h4>B...{value.person.name}---{value.person.age}</h4>
          }
        </Consumer>
      </div>
    )
  }
}
