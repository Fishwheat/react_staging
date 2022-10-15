import React, { Component } from 'react'

export default class Child extends Component {
  state = {
    persons: [
      {id: '001', name: 'tom', age: 18},
      {id: '002', name: 'jack', age: 19},
      {id: '003', name: 'jerry', age: 20},
    ]
  }
  render() {
    return (
      <div>
        <h2>我是Child组件</h2>
        {this.state.persons.map(item => <h4 key={item.id}>{item.name}---{item.age}</h4>)}
      </div>
    )
  }
}
