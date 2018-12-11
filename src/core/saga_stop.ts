import { takeEvery } from "redux-saga/effects"
import { Action, EmptyObject } from "../util"
import { TASK_STOP } from "./action_taskStop"
import { getState } from "./store"

// @ts-ignore
function* saga(action: Action<EmptyObject>) {
  const taskName = action.payload && action.payload.taskName
  const tasks = getState().task

  // @ts-ignore
  const index = tasks.findIndex(task => task.name === taskName)
  // const stopped = {
  //   name: tasks[index].name,
  //   start: tasks[index].start,
  //   end: Date.now(),
  // }
  yield "foo"
  return "foo"
  // yield put(historyPush(stopped))
  // yield put(rmTask(index))
}

export default function* stateWriteSaga() {
  yield takeEvery(TASK_STOP, () => {})
}
