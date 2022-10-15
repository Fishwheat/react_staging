import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class Header extends Component {
  handleGoBack = () => {
    this.props.history.goBack()
  }
  handleGoForward = () => {
    this.props.history.goForward()
  }
  handleGo = () => {
    this.props.history.go(1)
  }
  render() {
    return (
      <div className="page-header">
        <h2>React Router Demo</h2>
        <hr />
        <button onClick={this.handleGoBack}>goBack</button> &nbsp;
        <button onClick={this.handleGoForward}>goForward</button> &nbsp;
        <button onClick={this.handleGo}>go</button>
      </div>
    )
  }
}
export default withRouter(Header)
