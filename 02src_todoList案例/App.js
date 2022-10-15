import React, { Component } from 'react';
import Header from './components/Header';
import List from './components/List';
import Footer from './components/Footer';
import './App.css'
export default class App extends Component {
  state = {
    todos: [
      { id: '001', name: '吃饭', done: true },
      { id: '002', name: '睡觉', done: true },
      { id: '003', name: '工作', done: false }
    ]
  }
  addTodo = (todoObj) => {
    const { todos } = this.state
    const newTodos = [todoObj, ...todos]
    this.setState({
      todos: newTodos
    })
  }
  updateTodoCheck = (id, done) => {
    const { todos } = this.state
    const newTodos = todos.map(item => {
      if (item.id === id) return {...item, done}
      return item
    })
    this.setState({
      todos: newTodos
    })
  }
  deleteTodo = (id) => {
    const { todos } = this.state
    const newTodos = todos.filter(item => item.id !== id)
    this.setState({
      todos: newTodos
    })
  }
  handleAllCheckbox = (isAllCheck) => {
    const { todos } = this.state
    this.setState({
      todos: todos.map(item => ({
        ...item,
        done: isAllCheck
      }))
    })
  }
  deleteCheckedTodo = () => {
    const { todos } = this.state
    this.setState({
      todos: todos.filter(item => !item.done)
    })
  }
  
  render() {
    const { todos } = this.state;
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addTodo={this.addTodo}></Header>
          <List todos={ todos } updateTodoCheck={this.updateTodoCheck} deleteTodo={this.deleteTodo}></List>
          <Footer todos={ todos } handleAllCheckbox={this.handleAllCheckbox} deleteCheckedTodo={this.deleteCheckedTodo}></Footer>
        </div>
      </div>
    )
  }
}
