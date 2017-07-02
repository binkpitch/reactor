import React, { Component } from 'react'

import { Route, Switch } from 'react-router'
import { ConnectedRouter } from 'react-router-redux'
import { routerHistory, sagaMiddleware } from './store.js'

import rootSagas from './sagas'

import Menu from './containers/menuContainer'

import HomePage from './pages/homePage'
import NoMatchPage from './pages/noMatchPage'

class App extends Component {
  constructor (props) {
    super(props)
    sagaMiddleware.run(rootSagas)
  }

  render () {
    return (
      <ConnectedRouter history={routerHistory}>
        <div>
          <Route path='/' component={Menu} />
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route component={NoMatchPage} />
          </Switch>
        </div>
      </ConnectedRouter>
    )
  }
}

export default App
