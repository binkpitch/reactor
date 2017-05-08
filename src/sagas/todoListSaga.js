import { call, put } from 'redux-saga/effects'
import axios from 'axios'

const fetchTodoApi = () => {
  return axios({
    method: 'get',
    url: 'https://jsonplaceholder.typicode.com/posts/1'
  })
  .then(response => response.data.title)
  .catch(error => error)
}

function * fetchTodo (action) {
  try {
    const response = yield call(fetchTodoApi)
    const date = new Date().toLocaleDateString()
    const time = new Date().toLocaleTimeString()
    yield put({type: 'TODOLIST_FETCH_TODO_SUCCEEDED', payload: response})
    yield put({type: 'TODOLIST_ADD_TODO', text: response, date, time})
  } catch (error) {
    yield put({type: 'TODOLIST_FETCH_TODO_ERROR', error})
  }
}

export default fetchTodo
