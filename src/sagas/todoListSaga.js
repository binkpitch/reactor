import { call, put } from 'redux-saga/effects'
import axios from 'axios'
import { fetchTodoResponse, addTodo, fetchTodoError } from '../actions/todoListActions'

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
    yield put(fetchTodoResponse(response))
    yield put(addTodo(response, date, time))
  } catch (error) {
    yield put(fetchTodoError(error))
  }
}

export default fetchTodo
