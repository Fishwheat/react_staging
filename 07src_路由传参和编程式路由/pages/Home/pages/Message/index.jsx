import React, { Component } from 'react'
import {Link, Route} from 'react-router-dom'
import Detail from './Detail'

export default class Message extends Component {
  state = {
    messageArr: [
      {id: '01', title: '消息1'},
      {id: '02', title: '消息2'},
      {id: '03', title: '消息3'}
    ]
  }
  pushShow = (id, title) => {
    // 使用params传递参数
    this.props.history.push(`/home/message/detail/${id}/${title}`)

    // 使用search传递参数
    // this.props.history.push(`/home/message/detail/?id=${id}&title=${title}`)

    // 使用state传递参数
    // this.props.history.push('/home/message/detail', {id, title})
  }
  replaceShow = (id, title) => {
    // 使用params传递参数
    this.props.history.replace(`/home/message/detail/${id}/${title}`)

    // 使用search传递参数
    // this.props.history.replace(`/home/message/detail/?id=${id}&title=${title}`)

    // 使用state传递参数
    // this.props.history.replace('/home/message/detail', {id, title})
  }
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
      <div>
        <ul>
          {
            this.state.messageArr.map(item => {
              return (
                <li key={item.id}>

                  {/* 使用params传递参数 */}
                  {/* <Link replace to={`/home/message/detail/${item.id}/${item.title}`}>{item.title}</Link>&nbsp;&nbsp; */}
                  <button onClick={() => this.pushShow(item.id, item.title)}>push查看</button> &nbsp;
                  <button onClick={() => this.replaceShow(item.id, item.title)}>replace查看</button>

                  {/* 使用search传递参数 */}
                  {/* <Link to={`/home/message/detail/?id=${item.id}&title=${item.title}`}>{item.title}</Link>&nbsp;&nbsp; */}

                  {/* 使用state传递参数 */}
                  <Link to={{pathname: '/home/message/detail', state: {id: item.id, title: item.title}}}>{item.title}</Link>&nbsp;&nbsp;

                </li>
              )
            })
          }
        </ul>
        <hr />
        {/* 使用params定义路径 */}
        {/* <Route path="/home/message/detail/:id/:title" component={Detail} /> */}

        {/* 使用search定义路径 */}
        {/* <Route path="/home/message/detail" component={Detail} /> */}

        {/* 使用state定义路径 */}
        <Route path="/home/message/detail" component={Detail} />
        <hr />
        <button onClick={this.handleGoBack}>goBack</button> &nbsp;
        <button onClick={this.handleGoForward}>goForward</button> &nbsp;
        <button onClick={this.handleGo}>go</button>
      </div>
    )
  }
}
