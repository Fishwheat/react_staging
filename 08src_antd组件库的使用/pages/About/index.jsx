import React, { Component } from 'react'
import { Button, DatePicker } from 'antd';
import { WechatOutlined } from '@ant-design/icons';

export default class About extends Component {
  render() {
    return (
      <div>
        <h3>我是About的内容</h3>
        <h4>玩一玩antd</h4>
        <Button type="primary">Button</Button>
        <WechatOutlined />
        <DatePicker />
      </div>
    )
  }
}
