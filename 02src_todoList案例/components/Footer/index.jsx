import React, { Component } from 'react'
import './index.css'

export default class Footer extends Component {
  handleAllCheckbox = (e) => {
    this.props.handleAllCheckbox(e.target.checked)
  }
  deleteCheckedTodo = () => {
    this.props.deleteCheckedTodo()
  }

  render() {
    const { todos } = this.props
    const todosLength = todos.length
    const checkedLength = todos.filter(item => item.done).length
    const allCheckbox = todosLength === checkedLength && checkedLength !== 0
    return (
      <div>
        <div className="todo-footer">
          <label>
            <input type="checkbox" checked={allCheckbox} onChange={this.handleAllCheckbox}/>
          </label>
          <span>
            <span>已完成{checkedLength}</span> / 全部{todosLength}
          </span>
          <button className="btn btn-danger" onClick={this.deleteCheckedTodo}>清除已完成任务</button>
        </div>
      </div>
    )
  }
}
