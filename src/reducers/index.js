import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import { routerReducer } from 'react-router-redux'

// import your reducers here

// take all reducers and combine into root reducer
const rootReducer = combineReducers({
  form: formReducer,
  router: routerReducer
})

export default rootReducer
