import React from 'react'
import PropTypes from 'prop-types'
import { List, Button, Popup, TextArea } from 'semantic-ui-react'

const list = (props) => {
  const todoItems =
   props.dataSource.map((item) => {
     return (
       <List.Item key={item.id}>
         <List.Content floated='left'>
           <List.Header>
             {item.text}
           </List.Header>
           <List.Description>
             {item.date} - {item.time}
           </List.Description>
         </List.Content>
         <List.Content floated='right'>
           <Button icon='delete' onClick={() => props.removeItem(item.id)} />
         </List.Content>
         <List.Content floated='right'>
           <Popup
             trigger={<Button icon='edit' onClick={() => {}} />}
             content={<TextArea placeholder='Edit me!' onChange={(event, data) => props.editItem(item.id, data.value)} value={item.text} autoHeight />}
             on='click'
            />
         </List.Content>
       </List.Item>
     )
   })

  return (
    <List divided>
      {todoItems}
    </List>
  )
}

list.protoTypes = {
  dataSource: PropTypes.array.isRequired,
  removeItem: PropTypes.func.isRequired,
  editItem: PropTypes.func.isRequired
}

export default list
