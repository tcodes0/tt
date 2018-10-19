import { takeEvery } from "redux-saga/effects";
import { Action } from "redux-actions";
import { TASK_STOP, PayloadT } from "./action_stop";
import { getState } from "../_store";

function* stateWriteSaga(action: Action<PayloadT>) {
  const taskName = action.payload && action.payload.taskName;
  const tasks = getState().tasks
  const index = tasks.findIndex(task => task.name === taskName);
  const stopped = {
    name: tasks[index].name,
    start: tasks[index].start,
    end: Date.now()
  };
  return "foo"
  // yield put(historyPush(stopped))
  // yield put(rmTask(index))
}

export default function* watcher() {
  yield takeEvery(TASK_STOP, stateWriteSaga);
}
