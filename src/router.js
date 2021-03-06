import React from 'react'

// use dispatch(push('/page')) for page navigation
// for more actions, see https://github.com/ReactTraining/react-router/blob/master/packages/react-router-redux/modules/actions.js
import { Route, Switch } from 'react-router'
import { ConnectedRouter } from 'react-router-redux'
import { routerHistory } from './store.js'

import Menu from './containers/menuContainer'

// import your pages here
import HomePage from './pages/homePage'
import TodoListPage from './pages/todoListPage'
import NoMatchPage from './pages/noMatchPage'

const router = () => {
  return (
    <ConnectedRouter history={routerHistory}>
      <div>
        <Route path={process.env.PUBLIC_URL + '/'} component={Menu} />
        <Switch>
          <Route exact path={process.env.PUBLIC_URL + '/'} component={HomePage} />
          <Route path={process.env.PUBLIC_URL + '/todolist'} component={TodoListPage} />
          <Route component={NoMatchPage} />
        </Switch>
      </div>
    </ConnectedRouter>
  )
}

export default router
