import { takeLatest, call } from "redux-saga/effects"
import { init } from "../util"
import { FILES_INIT } from "./action_filesInit"

function* saga() {
  yield call(init)
}

export default function* filesInitSaga() {
  yield takeLatest(FILES_INIT, saga)
}
