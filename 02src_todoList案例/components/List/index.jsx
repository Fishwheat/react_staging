import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Item from '../Item'
import './index.css'

export default class List extends Component {
  static propTypes = {
    updateTodoCheck: PropTypes.func.isRequired
  }

  render() {
    const { todos, updateTodoCheck, deleteTodo } = this.props
    return (
      <ul className="todo-main">
        { todos.map(item => {
          return <Item key={ item.id } {...item} updateTodoCheck={updateTodoCheck} deleteTodo={deleteTodo}></Item>
        }) }
      </ul>
    )
  }
}
