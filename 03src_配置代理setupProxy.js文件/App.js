import React from 'react';
import axios from 'axios';

export default class App extends React.Component {
  getStudentData = () => {
    axios.get('/api2/cars').then(
      response => {console.log('成功了', response.data);},
      error => {console.log('失败了', error);}
    )
  }

  render() {
    return (
      <div>
        <button onClick={this.getStudentData}>获取学生信息</button>
      </div>
    )
  }
}