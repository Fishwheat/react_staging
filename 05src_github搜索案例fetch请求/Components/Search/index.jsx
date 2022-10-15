import React, { Component } from 'react'
// import axios from 'axios'
import PubSub from 'pubsub-js'

export default class Search extends Component {
  state = {
    position: {
      pageX: 0,
      pageY: 0,
    }
  }
  getSearchDate = async() => {
    // this.props.getSearchDate({isFirst: false, isLoading: true})
    PubSub.publish('search-data', {isFirst: false, isLoading: true})
    const {searchElement: {value: keyWord}} = this
    // axios.get(`/api1/search/users2?q=${keyWord}`).then(
    //   response => {
    //     // this.props.getSearchDate({
    //     //   isLoading: false,
    //     //   list: response.data.items,
    //     //   error: ''
    //     // })
    //     PubSub.publish('search-data', {
    //       isLoading: false,
    //       list: response.data.items,
    //       error: ''
    //     })
    //   },
    //   error => {
    //     // this.props.getSearchDate({
    //     //   isLoading: false,
    //     //   error: error.message
    //     // })
    //     PubSub.publish('search-data', {
    //       isLoading: false,
    //       error: error.message
    //     })
    //   },
    // )

    /* 未优化的写法 */
    // fetch(`/api1/search/users2?q=${keyWord}`).then(
    //   response => {
    //     console.log('访问服务器成功');
    //     return response.json()
    //   },
    //   error => {
    //     console.log('访问服务器失败');
    //     return new Promise(() => {});
    //   }
    // ).then(
    //   response => {
    //     console.log('成功拿到数据');
    //     PubSub.publish('search-data', {
    //       isLoading: false,
    //       list: response.items,
    //       error: ''
    //     })
    //   },
    //   error => {
    //     console.log('拿数据失败了');
    //     PubSub.publish('search-data', {
    //       isLoading: false,
    //       error: error.message
    //     })
    //   }
    // )

    /* 优化的写法 */
    // #region
    // fetch(`/api1/search/users2?q=${keyWord}`).then(
    //   response => {
    //     console.log('访问服务器成功');
    //     return response.json()
    //   }
    // ).then(
    //   response => {
    //     console.log('成功拿到数据');
    //     PubSub.publish('search-data', {
    //       isLoading: false,
    //       list: response.items,
    //       error: ''
    //     })
    //   }
    // ).catch(e => console.log('请求出错了', e))
    // #endregion

    /* async await */
    try {
      const response = await fetch(`/api1/search/users2?q=${keyWord}`)
      const data = await response.json()
      PubSub.publish('search-data', {
        isLoading: false,
        list: data.items,
        error: ''
      })
    } catch (error) {
      console.log('请求出错了', error)
    }
  }
  handleContextMenu = (e) => {
    e.preventDefault();
    const {pageX, pageY} = e
    this.setState({
      position: {
        pageX,
        pageY
      }
    })
    this.hideDom.style.display = 'block'
    console.log(e);
  }
  handleClick = () => {
    this.hideDom.style.display = 'none'
  }
  render() {
    const {pageX, pageY} = this.state.position
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading" onContextMenu={this.handleContextMenu}>Search Github Users</h3>
        <div ref={e => this.hideDom = e} style={{display: 'none', position: 'fixed', top: `${pageY}px`, left: `${pageX}px`, background: 'red'}} onClick={this.handleClick}>123</div>
        <div>
          <input ref={e => this.searchElement = e} type="text" placeholder="enter the name you search"/>&nbsp;<button onClick={this.getSearchDate}>Search</button>
        </div>
      </section>
    )
  }
}
