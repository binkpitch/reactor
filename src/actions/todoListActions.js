// a function that create action a.k.a. Action Creator
// this function return action.type and action.text to the reducer
export const addTodo = (text) => {
  return {
    type: 'TODOLIST_ADD_TODO',
    text
  }
}

export const removeTodo = (id) => {
  return {
    type: 'TODOLIST_REMOVE_TODO',
    id
  }
}

export const fetchTodoRequest = () => {
  return {
    type: 'TODOLIST_FETCH_TODO_REQUEST'
  }
}

export const fetchTodoResponse = (payload) => {
  return {
    type: 'TODOLIST_FETCH_TODO_RESPONSE',
    payload
  }
}

export const fetchTodoError = (error) => {
  return {
    type: 'TODOLIST_FETCH_TODO_RESPONSE',
    error
  }
}
