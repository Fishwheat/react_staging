import React, { Component } from 'react'
import { connect } from 'react-redux'
import { nanoid } from 'nanoid'
import { addPerson } from '../../redux/actions/persons'

class Person extends Component {
  addPerson = () => {
    const name = this.nameInputDom.value
    const age = this.ageInputDom.value * 1
    this.props.addPerson({id: nanoid(), name, age})
  }

  render() {
    return (
      <div>
        <h2>我是Person组件, Count为: {this.props.count}</h2>
        <input ref={e => this.nameInputDom = e} type="text" placeholder='name' />
        <input ref={e => this.ageInputDom = e} type="text" placeholder='age'/>
        <button onClick={this.addPerson}>添加</button>
        <ul>
          { this.props.personsList.map(item => <li key={ item.id }>{ item.name }---{ item.age }</li>) }
        </ul>
      </div>
    )
  }
}

export default connect(
  state => ({personsList: state.persons, count: state.count}),
  {
    addPerson,
  }
)(Person)
