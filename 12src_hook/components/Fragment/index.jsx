import React, { Component, Fragment } from 'react'

export default class FragmentTest extends Component {
  render() {
    return (
      // <>
      //   <h2>我是Fragment组件</h2>
      //   <h4>我是Fragment组件</h4>
      //   <h4>我是Fragment组件</h4>
      // </>
      <Fragment key={123}>
        <h2>我是Fragment组件</h2>
        <h4>我是Fragment组件</h4>
        <h4>我是Fragment组件</h4>
      </Fragment>
    )
  }
}
