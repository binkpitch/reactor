import React from 'react'
import { connect } from 'react-redux'
import { addTodo, removeTodo } from '../actions/todoListActions.js'
import List from '../components/list'
import AddInputButton from '../components/addInputButton'

const TodoList = (props) => {
  const onChange = (text) => {
    props.addTodo(text)
  }

  return (
    <div>
      <AddInputButton onChange={onChange} />
      <h2>Todo</h2>
      <List dataSource={props.dataSource} remove={props.removeTodo} />
    </div>
  )
}

// recieve store's state as prop
const mapStateToProps = (state, prop) => {
  return {
    dataSource: state.todoList.list
  }
}

// receive dispatch (contain action creators) as prop
const mapDispatchToProps = (dispatch) => {
  return {
    // wrap action creators into dispatch
    addTodo: (todo) => dispatch(addTodo(todo)),
    removeTodo: (id) => dispatch(removeTodo(id))
  }
}

// connect component to store using higher order components
export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
