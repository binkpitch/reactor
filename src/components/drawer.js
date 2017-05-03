import React from 'react'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'

const drawer = (props) => {
  return (
    <Drawer width='20%' docked>
      <MenuItem checked={props.pathname === '/'} onTouchTap={() => props.pushHomePage()} insetChildren>Home Page</MenuItem>
    </Drawer>
  )
}

export default drawer
