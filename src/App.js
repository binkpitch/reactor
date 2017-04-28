import React, { Component } from 'react'
// import atom from './App_logo.svg'
import './App.css'

import TodoList from './containers/todoList'

class App extends Component {
  render () {
    return (
      <div className='Container'>
        {/* <img className='Logo' src={atom} alt={'atom'} />
        <div className='Text-wrapper'>
          <h1 className='Text'>REACTOR</h1>
          <h1 className='Text2'>React Boilerpate</h1>
        </div> */}
        <TodoList />
      </div>
    )
  }
}

export default App
