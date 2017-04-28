import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import store from './store'
import { Provider } from 'react-redux'

ReactDOM.render(
  // Use Provide to provide store to all parts of the application
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
