import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './index.css'

export default class Item extends Component {
  static propTypes = {
    updateTodoCheck: PropTypes.func.isRequired
  }

  state = {isEnter: false}
  handleMouseEnter = (done) => {
    return () => {
      this.setState({
        isEnter: done
      })
    }
  }
  handleTodoCheck = (id) => {
    return (e) => {
      this.props.updateTodoCheck(id, e.target.checked)
    }
  }
  deleteTodo = (id) => {
    return () => {
      this.props.deleteTodo(id)
    }
  }

  render() {
    const { id, name, done } = this.props;
    const { isEnter } = this.state
    return (
      <li onMouseEnter={this.handleMouseEnter(true)} onMouseLeave={this.handleMouseEnter(false)} style={{background: (isEnter ? '#ddd' : 'white')}}>
        <label>
          <input type="checkbox" checked={ done } onChange={this.handleTodoCheck(id)} />
          <span>{ name }</span>
        </label>
        <button className="btn btn-danger" style={{display:(isEnter ? 'block' : 'none')}} onClick={this.deleteTodo(id)}>删除</button>
      </li>
    )
  }
}
