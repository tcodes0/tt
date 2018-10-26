import { takeLatest, call } from "redux-saga/effects"
import { init } from "../util"
import { FILES_INIT } from "."

function* filesInitSaga() {
  yield call(init)
}

export default function* watcher() {
  yield takeLatest(FILES_INIT, filesInitSaga)
}
