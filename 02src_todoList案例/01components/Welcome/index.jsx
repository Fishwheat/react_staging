import React from 'react';
// 模块化样式
import welcome from './index.module.css';

export default class Welcome extends React.Component {
  render() {
    return (
      <div>
        <h3 className={welcome.welcome}>我是Welcome子组件</h3>
      </div>
    )
  }
}
