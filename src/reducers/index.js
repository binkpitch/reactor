import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

// import your reducer here
import todoListReducer from './todoListReducer'

// take all reducers and combine into root reducer
const rootReducer = combineReducers({
  todoList: todoListReducer,
  form: formReducer
})

export default rootReducer
