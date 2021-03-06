import React from 'react'
import { connect } from 'react-redux'
import { addTodo, removeTodo, fetchTodoRequest, editTodo } from '../actions/todoListActions.js'
import { Button } from 'semantic-ui-react'
import List from '../components/listComponent'
import TextBox from '../components/textBoxComponent'

const TodoList = (props) => {
  const handleAddTodo = () => {
    const date = new Date().toLocaleDateString()
    const time = new Date().toLocaleTimeString()
    props.addTodoForm.values
      ? props.addTodo(props.addTodoForm.values.textBox, date, time)
      : props.addTodo('')
  }

  const handleEditTodo = (id, text) => {
    props.editTodo(id, text)
  }

  return (
    <div style={props.style}>
      <TextBox formName='addTodo' onSubmit={handleAddTodo} content={'ADD'} />
      <h4>OR</h4>
      <Button content='Fetch Todo using GET' onClick={props.fetchTodoRequest} />
      <br />
      <h2>Todo</h2>
      <List dataSource={props.dataSource} removeItem={props.removeTodo} editItem={handleEditTodo} />
    </div>
  )
}

// recieve store's state as prop
const mapStateToProps = (state) => {
  return {
    dataSource: state.todoList.list,
    addTodoForm: state.form.addTodo,
    editTodoForm: state.form.editTodo
  }
}

// receive dispatch (contain action creators) as prop
// const mapDispatchToProps = (dispatch) => {
//   return {
//     // wrap action creators into dispatch
//     addTodo: (text, date, time) => dispatch(addTodo(text, date, time)),
//     removeTodo: (id) => dispatch(removeTodo(id)),
//     fetchTodoRequest: () => dispatch(fetchTodoRequest()),
//     editTodo: (id, text) => dispatch(editTodo(id, text))
//   }
// }

// this is equivalent to to the above mapDispatchToProps
const mapDispatchToProps = {
  addTodo,
  removeTodo,
  fetchTodoRequest,
  editTodo
}

// connect component to store using higher order components
export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
