import React, { Component } from 'react'
import store, { sagaMiddleware } from './store'
import { Provider } from 'react-redux'

import rootSagas from './sagas'

import Router from './router'

class App extends Component {
  constructor (props) {
    super(props)
    sagaMiddleware.run(rootSagas)
  }

  render () {
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    )
  }
}

export default App
