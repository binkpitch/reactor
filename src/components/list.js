import React from 'react'
import PropTypes from 'prop-types'

const List = (props) => {
  const todoItems = props.dataSource.map((item, id) => {
    return (
      <li key={id}>
        {item.text}
        <button onClick={() => props.remove(item.id)}>x</button>
      </li>
    )
  })

  return (
    <ul>
      {todoItems}
    </ul>
  )
}

List.protoTypes = {
  dataSource: PropTypes.array.isRequired,
  remove: PropTypes.func.isRequired
}

export default List
