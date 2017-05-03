import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import store from './store'
import { Provider } from 'react-redux'
// Material UI requires theme to be set up beforehand
// in this case, we use the default "lightBaseTheme" theme
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

ReactDOM.render(
  // Use Provider to provide store to all parts of the application
  <Provider store={store}>
    <MuiThemeProvider>
      <App />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
)
