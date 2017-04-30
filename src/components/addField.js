import React from 'react'
import PropTypes from 'prop-types'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { reduxForm, Field } from 'redux-form'
// To use Field (from redux-form) with material-ui, use component from 'redux-form-material-ui'
// For list of availiable components, see https://github.com/erikras/redux-form-material-ui
import { TextField } from 'redux-form-material-ui'
import FlatButton from 'material-ui/FlatButton'

let addField = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field name='text' component={TextField} floatingLabelText='Type me!' />
      <FlatButton type='submit' label='Add' secondary />
    </form>
  )
}

const mapStateToProps = (state, props) => {
  return {
    form: props.formName
  }
}

// use dynamic form name (props.formName) in redux form
export default compose(
    connect(mapStateToProps),
    reduxForm()
)(addField)

addField.protoTypes = {
  onSubmit: PropTypes.func.isRequired,
  formName: PropTypes.string.isRequired
}
