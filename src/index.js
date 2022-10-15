import React from 'react';
// import ReactDOM from 'react-dom';
import App from './App';
import {createRoot} from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

// ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'))

const container = document.getElementById('root')
const root = createRoot(container)
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)

export default root
