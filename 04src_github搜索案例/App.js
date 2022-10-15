import React, { Component } from 'react'
import Search from './Components/Search'
import List from './Components/List'
import './App.css'

export default class App extends Component {
  // state = {
  //   list: [],
  //   isFirst: true,
  //   isLoading: false,
  //   error: '',
  // }
  // getSearchDate = (data) => {
  //   this.setState({...data})
  // }
  render() {
    return (
      <div className="container">
        {/* <Search getSearchDate={this.getSearchDate}></Search> */}
        <Search />
        {/* <List {...this.state}></List> */}
        <List />
      </div>
    )
  }
}
