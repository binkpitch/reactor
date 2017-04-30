import React from 'react'
import PropTypes from 'prop-types'
import { reduxForm, Field } from 'redux-form'
// To use Field (from redux-form) with material-ui, use component from 'redux-form-material-ui'
// For list of availiable components, see https://github.com/erikras/redux-form-material-ui
import { TextField } from 'redux-form-material-ui'
import FlatButton from 'material-ui/FlatButton'

let addTodo = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field name='todo' component={TextField} floatingLabelText='Type me!' />
      <FlatButton type='submit' label='Add' secondary />
    </form>
  )
}

addTodo.protoTypes = {
  onSubmit: PropTypes.func.isRequired
}

addTodo = reduxForm({
  form: 'todo'
})(addTodo)

export default addTodo
