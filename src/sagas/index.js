// use 'takeEvery' to intercept action and run saga task
// use 'takeLatest' same as 'takeEvery' but also cancel previous saga task (if any)
// use 'fork' to run saga task immediately

// add your saga here
function * rootSagas () {
  // intercept 'TODOLIST_FETCH_TODO_REQUEST' action and run 'todoListSaga'
}

export default rootSagas
