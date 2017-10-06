import React from 'react'
import { Message } from 'semantic-ui-react'

const styles = {
  mainContainer: {
    marginLeft: 16,
    marginRight: 16
  }
}

const noMatchPage = (props) => {
  return (
    <div style={styles.mainContainer}>
      <Message negative>
        <Message.Header>We're sorry, we don't know "{props.location.pathname}"</Message.Header>
        <p>Did you misspelled the web address?</p>
      </Message>
    </div>
  )
}

export default noMatchPage
