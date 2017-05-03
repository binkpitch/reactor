import React from 'react'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'

const drawer = (props) => {
  return (
    <Drawer width='20%' docked>
      <MenuItem checked={props.pathname === '/'} onTouchTap={() => props.pushIntro()} insetChildren>Intro</MenuItem>
      <MenuItem checked={props.pathname === '/todo'} onTouchTap={() => props.pushTodo()} insetChildren>Todo</MenuItem>
    </Drawer>
  )
}

export default drawer
