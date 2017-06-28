import React from 'react'
import { Message } from 'semantic-ui-react'
import injectSheet from 'react-jss'

const styles = {
  mainContainer: {
    marginLeft: 16,
    marginRight: 16
  }
}

const noMatchPage = (props) => {
  console.log('props', props)
  return (
    <div style={styles.mainContainer}>
      <Message negative>
        <Message.Header>We're sorry, we don't know "{props.location.pathname}"</Message.Header>
        <p>Did you misspelled the web address?</p>
      </Message>
    </div>
  )
}

export default injectSheet(styles)(noMatchPage)
