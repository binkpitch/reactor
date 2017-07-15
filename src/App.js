import React, { Component } from 'react'
import store, { sagaMiddleware } from './store'
import { Provider } from 'react-redux'
// get every sagas
import rootSagas from './sagas'

import Router from './router'

class App extends Component {
  constructor (props) {
    super(props)
    sagaMiddleware.run(rootSagas)
  }

  render () {
    return (
        // Use Provider to provide store to all parts of the application
      <Provider store={store}>
        <Router />
      </Provider>
    )
  }
}

export default App
