import React, { Component } from 'react'
import PubSub from 'pubsub-js';

export default class List extends Component {
  state = {
    list: [],
    isFirst: true,
    isLoading: false,
    error: '',
  }

  componentDidMount() {
    PubSub.subscribe('search-data', (_, data) => {
      this.setState({...data})
    })
  }
  componentWillUnmount() {
    PubSub.unsubscribe('search-data')
  }
  render() {
    // const { list, isFirst, isLoading, error } = this.props
    const { list, isFirst, isLoading, error } = this.state
    return (
      <div className="row">
        { isFirst ? <h2>Good morning, and in case I don't see you, good afternoon, good evening, and good night!</h2> :
          isLoading ? <h1>Loading...</h1> :
          error ? <h2 style={{color: 'red'}}>{error}</h2> :
          list.map(item => (
            <div className="card" key={item.id}>
              <a rel="noreferrer" href={item.html_url} target="_blank">
                <img alt='head_protrait' src={item.avatar_url} style={{width: '100px'}}/>
              </a>
              <p className="card-text">{item.login}</p>
            </div>
          )
        )}
      </div>
    )
  }
}
