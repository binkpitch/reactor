// use 'takeEvery' to intercept action and run saga task
// use 'takeLatest' same as 'takeEvery' but also cancel previous saga task (if any)
// use 'fork' to run saga task immediately
import { takeLatest } from 'redux-saga/effects'
import todoListSaga from './todoListSaga'

// add your saga here
function * rootSagas () {
  // intercept 'TODOLIST_FETCH_TODO_REQUEST' action and run 'todoListSaga'
  yield takeLatest('TODOLIST_FETCH_TODO_REQUEST', todoListSaga)
}

export default rootSagas
