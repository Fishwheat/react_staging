import React, { Component } from 'react'
// import qs from 'querystringify'

export default class Detail extends Component {
  render() {
    console.log(this.props);
    // 使用params获取参数
    const {id, title} = this.props.match.params

    // 使用search获取参数
    // const {id, title} = qs.parse(this.props.location.search.slice(1))

    // 使用state获取参数
    // const {id, title} = this.props.location.state

    const detailArr = [
      {id: '01', content: '1111111'},
      {id: '02', content: '2222222'},
      {id: '03', content: '3333333'},
    ].find(item => item.id === id)
    return (
      <div>
        <div>id:{id}</div>
        <div>title:{title}</div>
        <div>content:{detailArr.content}</div>
      </div>
    )
  }
}
