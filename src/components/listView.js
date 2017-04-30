import React from 'react'
import PropTypes from 'prop-types'
// use 'material-ui/ComponentName' when importing for faster and smaller build
import { List, ListItem } from 'material-ui/List'
import IconButton from 'material-ui/IconButton'

const ListView = (props) => {
  const todoItems =
   props.dataSource.map((item, id) => {
     const deleteIconButton = <IconButton onTouchTap={() => props.remove(item.id)} iconClassName='material-icons' tooltip='delete'>delete</IconButton>
     return (
       <ListItem key={id} rightIconButton={deleteIconButton}>
         {item.text}
       </ListItem>
     )
   })

  return (
    <List>
      {todoItems}
    </List>
  )
}

ListView.protoTypes = {
  dataSource: PropTypes.array.isRequired,
  remove: PropTypes.func.isRequired
}

export default ListView
