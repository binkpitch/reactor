import React from 'react'
import { connect } from 'react-redux'
import { addTodo, removeTodo } from '../actions/todoListActions.js'
import ListView from '../components/listView'
import AddField from '../components/addField'

const TodoList = (props) => {
  const handleSubmit = (event) => {
    props.addTodo(event.text)
  }

  return (
    <div style={props.style}>
      <AddField formName='todo' onSubmit={handleSubmit} />
      <h2>Todo</h2>
      <ListView dataSource={props.dataSource} remove={props.removeTodo} />
    </div>
  )
}

// recieve store's state as prop
const mapStateToProps = (state) => {
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
