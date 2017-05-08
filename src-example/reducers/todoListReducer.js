// set store's initial state
const initialState = {
  list: [
    {id: 1, text: 'Todo from inital reducer state.', date: '5/8/2016', time: '12:02:12 PM'}
  ]
}

// create a reducer accepting previous state and action
// then return new states (immutable) to store
const todoListReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TODOLIST_ADD_TODO': {
      const lastestItem = state.list.length > 0
        ? state.list.reduce((prev, next) => next.id > prev.id ? next : prev)
        : { id: 0 }
      const newId = lastestItem.id + 1
      const newTodoList = state.list.concat({ id: newId, text: action.text, date: action.date, time: action.time })
      return { ...state, list: newTodoList }
    }
    case 'TODOLIST_REMOVE_TODO': {
      const newTodoList = state.list.filter((item) => item.id !== action.id)
      // use spread operator to prevent mutable of state
      return { ...state, list: newTodoList }
    }
    default:
      return state
  }
}

export default todoListReducer
