import React from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import Menu from '../components/menuComponent'

const menu = (props) => {
  const items = [
    {
      name: 'Home Page',
      isActive: props.location.pathname === process.env.PUBLIC_URL + '/',
      onClick: props.pushHomePage
    }, {
      name: 'Todo List',
      isActive: props.location.pathname === process.env.PUBLIC_URL + '/todolist',
      onClick: props.pushTodoList
    }
  ]

  return (
    <Menu header='Reactor' items={items} />
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    pushHomePage: () => dispatch(push(process.env.PUBLIC_URL + '/')),
    pushTodoList: () => dispatch(push(process.env.PUBLIC_URL + '/todolist'))
  }
}

export default connect(null, mapDispatchToProps)(menu)
