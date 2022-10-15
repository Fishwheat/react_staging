import React, { Component } from 'react'
import { nanoid } from 'nanoid';
import './index.css'

export default class Header extends Component {
  keyUp = (e) => {
    const { keyCode, target } = e
    if (keyCode === 13 && target.value) {
      const { addTodo } = this.props
      if (addTodo) {
        const todoObj = { id: nanoid(), name: target.value, done: false };
        addTodo(todoObj)
      }
    }
  }
  render() {
    return (
      <div>
        <div className="todo-header">
          <input onKeyUp={ this.keyUp } type="text" placeholder="请输入你的任务名称，按回车键确认"/>
        </div>
      </div>
    )
  }
}
