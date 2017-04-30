import React, { Component } from 'react'
// required by Material UI for onTouchTap
// http://stackoverflow.com/a/34015469/988941
import injectTapEventPlugin from 'react-tap-event-plugin'
import TodoListPage from './pages/todoListPage'

class App extends Component {
  constructor (props) {
    super(props)
    injectTapEventPlugin()
  }

  render () {
    return (
      <div>
        <TodoListPage />
      </div>
    )
  }
}

export default App
