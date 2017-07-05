import React from 'react'
import PropTypes from 'prop-types'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { reduxForm, Field } from 'redux-form'
import { Form } from 'semantic-ui-react'

const renderFormInput = (field) => <Form.Input {...field.input} placeholder={field.placeholder} />

const textArea = (props) => {
  return (
    <Form onSubmit={props.onSubmit}>
      <Field name='textArea' component={renderFormInput} placeholder={props.placeholder || 'Type me!'} />
      <Form.Button content={props.content || 'Submit'} floated={props.float || 'right'} />
    </Form>
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
    reduxForm({})
)(textArea)

textArea.protoTypes = {
  onSubmit: PropTypes.func.isRequired,
  formName: PropTypes.string.isRequired,
  content: PropTypes.string,
  float: PropTypes.string,
  placeholder: PropTypes.string
}
