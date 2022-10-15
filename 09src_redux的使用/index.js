import React from 'react';
// import ReactDOM from 'react-dom';
import App from './App';
import store from './redux/store'
import { createRoot } from 'react-dom/client'

// ReactDOM.render(<App />, document.getElementById('root'))

// store.subscribe(() => {
//     ReactDOM.render(<App />, document.getElementById('root'))
//   }
// )

const container = document.getElementById('root')
const root = createRoot(container)
root.render(<App />)
store.subscribe(() => {
    root.render(<App />)
  }
)