import React from 'react'

const addInputButton = (props) => {
  let fieldInput = ''

  const onSubmit = (event) => {
    event.preventDefault()
    props.onChange(fieldInput.value)
  }

  return (
    <form onSubmit={onSubmit}>
      <input type='text' name='add' ref={text => { fieldInput = text }} />
      <button>Submit</button>
    </form>
  )
}

export default addInputButton
