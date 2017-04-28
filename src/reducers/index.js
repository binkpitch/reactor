import { combineReducers } from 'redux'

// import your reducer here
import todoListReducer from './todoListReducer'

// take all reducers and combine into root reducer
const rootReducer = combineReducers({
  todoList: todoListReducer
})

export default rootReducer
