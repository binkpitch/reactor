import React, { Component } from 'react'

// required by Material UI for onTouchTap
// http://stackoverflow.com/a/34015469/988941
import injectTapEventPlugin from 'react-tap-event-plugin'

// use dispatch(push('/page')) for page navigation
// for more actions, see https://github.com/ReactTraining/react-router/blob/master/packages/react-router-redux/modules/actions.js
import { Route } from 'react-router'
import { ConnectedRouter } from 'react-router-redux'
import { history, sagaMiddleware } from './store.js'

// get every sagas
import rootSagas from './sagas'

import AppBar from './components/appBar'
import Drawer from './containers/drawer'

// import your pages here
import HomePage from './pages/homePage'

import injectSheet from 'react-jss'
const styles = {
  marginLeft: '20%'
}

class App extends Component {
  constructor (props) {
    super(props)
    injectTapEventPlugin()
    sagaMiddleware.run(rootSagas)
  }

  render () {
    return (
      <ConnectedRouter history={history}>
        <div>
          {/* Drawer and AppBar will be render in every screen since '/' will match with every path */}
          <Route path='/' component={Drawer} />
          {/* add margin left for drawer */}
          <div style={styles}>
            <Route path='/' component={AppBar} />
            <Route exact path='/' component={HomePage} />
          </div>
        </div>
      </ConnectedRouter>
    )
  }
}

export default injectSheet(styles)(App)
