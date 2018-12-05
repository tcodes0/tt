import { takeEvery } from "redux-saga/effects"
import { Action } from "redux-actions"
import { TASK_STOP, PayloadStop } from "./action_taskStop"
import { getState } from "./store"

function* saga(action: Action<PayloadStop>) {
  const taskName = action.payload && action.payload.taskName
  const tasks = getState().tasks
  const index = tasks.findIndex(task => task.name === taskName)
  // @ts-ignore
  const stopped = {
    name: tasks[index].name,
    start: tasks[index].start,
    end: Date.now(),
  }
  yield "foo"
  return "foo"
  // yield put(historyPush(stopped))
  // yield put(rmTask(index))
}

export default function* stateWriteSaga() {
  yield takeEvery(TASK_STOP, saga)
}
