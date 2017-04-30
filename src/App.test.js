// Tell Standard JS that 'it' is a global variable created by Jest
/* eslint-env jest */

import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<App />, div)
})
