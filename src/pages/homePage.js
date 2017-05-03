import React from 'react'
import injectSheet from 'react-jss'

const styles = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}

const HomePage = () => {
  return (
    <div style={styles}>
      <h2>Reactor</h2>
    </div>
  )
}

export default injectSheet(styles)(HomePage)
