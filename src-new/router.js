import React from 'react'

import { Route, Switch } from 'react-router'
import { ConnectedRouter } from 'react-router-redux'
import { routerHistory } from './store.js'

import Menu from './containers/menuContainer'

import HomePage from './pages/homePage'
import NoMatchPage from './pages/noMatchPage'

const router = () => {
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

export default router
